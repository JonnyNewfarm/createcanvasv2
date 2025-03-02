"use server"

import { BASE_PRICE } from "@/config/products"
import { db } from "@/db"
import { stripe } from "@/lib/stripe"
import { MODELS } from "@/validators/optionValidator"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Order } from "@prisma/client"

export const createCheckoutSession = async ({configId}: {configId: string}) => {

    const configuration = await db.configuration.findUnique({
        where: {
            id: configId
        }
    })

    if(!configuration) {
        throw new Error("Configuration not found")
    }

    const {getUser } = getKindeServerSession()
    const user = await getUser()

    if(!user) {
        throw new Error("You need to sign in first")
    }
    const {size} = configuration

    let price = BASE_PRICE

    if(size === "medium") {
        price += MODELS.options[0].price 
    }

    if(size === "large") {
        price += MODELS.options[1].price 
    }

    if(size === "xl") {
        price += MODELS.options[2].price 
    }
   


    let order: Order | undefined = undefined

    const existingOrder = await db.order.findFirst({
        where:{
            userId: user.id,
            configurationId: configuration.id

        }
    })

    console.log("OKOKOK",user.id)

    if(existingOrder){
        order = existingOrder
    } else {
        order = await db.order.create({
            data: {
                
                amount: price / 100,
                userId: user.id,
                configurationId: configuration.id
            }
        })
    }

    const product = await stripe.products.create({
        name: "Custom canvas",
        images: [configuration.croppedImageUrl!],
        default_price_data: {
            currency: "USD",
            unit_amount: price,
        }
    })

    const stripeSession = await stripe.checkout.sessions.create({
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
        cancel_url:  `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
        payment_method_types: ["card", "paypal",],
        mode: "payment",
        shipping_address_collection: {allowed_countries: ["US", "NO", "SE"]},
        metadata: {
            userId: user.id,
            orderId: order.id

        },
        line_items: [{price: product.default_price as string, quantity: 1},]
    })

    return {url: stripeSession.url}



}