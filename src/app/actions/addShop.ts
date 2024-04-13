"use server";
import { db } from "@/lib/db";
import { AddShopSchema } from "@/schemas";
import * as z from "zod";

export const addShop = async (shop: z.infer<typeof AddShopSchema>) => {
  const validatedFields = AddShopSchema.safeParse(shop);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  await db.shop.create({ data: shop });
  return { success: "Shop Added" };
};
