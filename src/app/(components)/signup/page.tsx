"use client";
import { registerSchema } from "@/app/schema/register.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import registerImage from "../../../../public/imgi_2_signup-g-Dtp6-wtD.png";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import Link from "next/link";

function SignUp() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  async function handleRegister(value: any) {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        value
      );

      if (response.data.message == "success") {
        //toast for success
        toast.success("Registerd successfully.......", {
          position: "top-center",
          duration: 3000,
        });
        //navigate login
        router.push("/signin");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        duration: 3000,
      });
      
    }
  }

  return (
    <div className="container w-[90%]  mx-auto flex items-center gap-20 justify-eve' mt-5    p-10">
      <div className=" ms-auto text-center ">
        <Image className=" ms-auto" src={registerImage} alt="sign up image" />
      </div>
      <div className=" mx-auto ">
        <h1 className=" text-gray-950 text-3xl font-bold  ">
          Get Start Shopping
        </h1>
        <p className="mb-3">
          Welcome to FreshCart! Enter your email to get started.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-6 mt-5"
          >
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Name :
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Email :
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Password :
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Confirm Password :
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showRePassword ? "text" : "password"}
                        placeholder="******"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRePassword((prev) => !prev)}
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                      >
                        {showRePassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium mb-1 ">
                    Phone :
                  </FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-800 py-3 w-full rounded-md font-bold cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </Form>
        <div className="text">
          <p className="text-base font-medium mt-5">
            You have an account?
            <Link href={"/signin"} className="text-green-400 cursor-pointer">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
