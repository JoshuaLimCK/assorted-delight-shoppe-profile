import * as z from "zod";

export const AddShopSchema = z.object({
  name: z.string().min(1, { message: "Shop name is required" }),
  contact: z.string().min(1, { message: "Contact number is required" }),
  hours: z.string().min(1, { message: "Working hours is required" }),
  imageLink: z.string().min(1, { message: "Image link is required" }),
});

export const AddProductSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  category: z.string().min(1, { message: "Product category is required" }),
  price: z.number().min(1, { message: "Price is required" }),
  stock: z.number().min(1, { message: "Stock quantity is required" }),
  imageLink: z.string().min(1, { message: "Image link is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 character" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});
