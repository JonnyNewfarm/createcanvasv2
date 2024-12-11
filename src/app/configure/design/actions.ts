"use server"

import { db } from "@/db";
import { CanvasColor, SizeCanvas } from "@prisma/client";

export type SaveConfigArgs = {
    color: CanvasColor, size: SizeCanvas, configId: string
}

export async function saveConfig({color, size, configId}: SaveConfigArgs) {

    await db.configuration.update({
        where: {id: configId},
        data: {
            color, size
        }
    })

}