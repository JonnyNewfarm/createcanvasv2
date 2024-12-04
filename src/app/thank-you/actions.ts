"use server"

import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user?.id || !user.email) {
        throw new Error("You need to login")
    }


    const order = await db.order.findFirst({
        where: { id: orderId },
        include: {

            billingAddress: true,
            configuration: true,
            shippingAddress: true,
            user: true,
        }
    })

    if (!order)  throw new Error("Order does not exist")
    
    if (order.isPaid) {
        return order
    } else {
        return false
    }
}