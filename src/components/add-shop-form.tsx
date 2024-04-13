"use client";

import * as z from "zod";
import { signal } from "@preact/signals";
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
import { CardWrapper } from "@/components/card-wrapper";
import { AddShopSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { addShop } from "@/app/actions/addShop";
import { useTransition } from "react";

export const AddShopForm = () => {
  const { reset } = useForm();
  const success = signal("");
  const error = signal("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof AddShopSchema>>({
    resolver: zodResolver(AddShopSchema),
    defaultValues: {
      name: "",
      contact: "",
      hours: "",
      imageLink: "",
    },
  });
  const onSubmit = (values: z.infer<typeof AddShopSchema>) => {
    error.value = "";
    success.value = "";
    startTransition(() => {
      addShop(values).then((res) => {
        success.value = res.success ?? "";
        error.value = res.error ?? "";
        reset(values);
      });
    });
  };
  return (
    <>
      <div className="flex justify-center p-6">
        <CardWrapper
          headerLabel="Update Shop"
          subheaderLabel="Update Now"
          // backButtonLabel="Go back"
          // backButtonHref="/dashboard/stores"
        >
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shop Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="ABC"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="04-3456789"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="hours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Working Hours</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="9 am - 5 pm"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="imageLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shop Image Link</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="www.google.com/image.jpg"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <FormError message={error.value} />
              <FormSuccess message={success.value} />
              <Button type="submit" className="w-full" disabled={isPending}>
                Submit
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </div>
    </>
  );
};
