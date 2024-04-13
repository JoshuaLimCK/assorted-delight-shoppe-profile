"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "@/lib/db";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { AddShopSchema } from "../../../schemas";
import { AddShopForm } from "@/components/add-shop-form";

const UpdateShop = async () => {
  const form = useForm<z.infer<typeof AddShopSchema>>({
    resolver: zodResolver(AddShopSchema),
    defaultValues: {
      name: "",
      contact: "",
      hours: "",
      imageLink: "",
    },
  });
  return (
    <>
      <AddShopForm />
    </>
  );
};

export default UpdateShop;
