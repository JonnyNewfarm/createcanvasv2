"use server"

import { db } from "@/db";
import { CanvasColor, SizeCanvas } from "@prisma/client";

export type SaveConfigArgs = {
     size: SizeCanvas, configId: string
}

export async function saveConfig({ size, configId}: SaveConfigArgs) {

    await db.configuration.update({
        where: {id: configId},
        data: {
             size
        }
    })

}