"use server"

import { db } from "@/db";
import { CanvasColor, SizeCanvas } from "@prisma/client";

export type saveConfigArgs = {
    color: CanvasColor, size: SizeCanvas, configId: string
}

export async function saveConfig({color, size, configId}: saveConfigArgs) {

    await db.configuration.update({
        where: {id: configId},
        data: {
            color, size
        }
    })

}