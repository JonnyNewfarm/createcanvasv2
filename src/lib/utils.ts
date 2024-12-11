import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

export function createMetadata({
  title = "CreateCanvas",
  description = "Create a custom painting",

}: {
  title?: string
  description?: string
} = {}): Metadata {
return {
  title,
  description,
  openGraph: {title, description},
  metadataBase:new URL("https://createcanvas.vercel.app/")
}
}


