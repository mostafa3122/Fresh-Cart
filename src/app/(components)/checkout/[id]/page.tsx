"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { checkOutSchema } from "@/app/schema/checkout.schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onlinePayment } from "@/Api/payment/checkout.Api";
import { useParams } from "next/navigation";

export default function CheckOut() {
  const { id }: { id: string } = useParams();

  const form = useForm({
    defaultValues: {
      phone: "",
      city: "",
      details: "",
    },
    resolver: zodResolver(checkOutSchema),
  });
  async function handlePayment(value: any) {
    const data = await onlinePayment(value, id);
    if (data.status === "success") {
      window.location.href = data.session.url;
    }
  }

  return (
    <div className="container w-[85%]  mx-auto flex items-center gap-20 justify-evenly mt-5    p-10">
      <div className=" mx-auto w-full ">
        <h2 className=" text-gray-950 text-3xl font-bold  ">Check Out</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handlePayment)}
            className="space-y-6 mt-5 font-medium"
          >
            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone Number ..."
                      {...field}
                      className="py-2 px-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    City
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Write Your City ..."
                        {...field}
                        className="pr-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Details */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Details
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        placeholder="Write Your Address here ..."
                        {...field}
                        className="pr-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* radio group */}
            <div className="flex flex-col gap-8">
              <RadioGroup defaultValue="comfortable" className="w-fit">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Cash Payment</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Online Payment</Label>
                </div>
              </RadioGroup>

              <button
                type="submit"
                className="text-white bg-green-600 hover:bg-green-800 py-3 w-full rounded-md font-bold cursor-pointer"
              >
                continue with
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
