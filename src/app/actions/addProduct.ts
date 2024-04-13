import { db } from "@/lib/db";
import { AddProductSchema } from "@/schemas";
import * as z from "zod";
export const addProduct = async (product: z.infer<typeof AddProductSchema>) => {
  const validatedFields = AddProductSchema.safeParse(product);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  await db.product.create({ data: product });
  return { success: "Product Added" };
};
