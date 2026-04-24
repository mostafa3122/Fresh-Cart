"use client";
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
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import signInImage from "../../../../public/signin-DlR7P608.png";
import { loginSchema } from "@/app/schema/login.schema";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

function SignIn() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  async function handleRegister(values: any) {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      // لو فيه خطأ
      if (res?.error) {
        toast.error("Invalid email or password", {
          position: "top-center",
          duration: 3000,
        });
        return;
      }

      // نجاح
      toast.success("Logged in successfully!", {
        position: "top-center",
        duration: 3000,
      });

      router.push("/home");
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        duration: 3000,
      });
    }

    // async function handleRegister(values: any) {
    //   try {
    //     const res = await signIn("credentials", {
    //       email: values.email,
    //       password: values.password,
    //       redirect: false,
    //     });

    //     // Log full response

    //     // ❌ Login failed (wrong email/password)
    //     if (res?.error) {
    //       toast.error(res.error);
    //       return;
    //     }

    //     // ✅ Login successful
    //     toast.success("Logged in successfully!");
    //     router.push("/home");

    //   } catch (error: any) {
    //     // ❗ Only triggers for real exceptions (network/offline/server crash)
    //     // console.error("TRY/CATCH ERROR:", error);
    //     toast.error("Something went wrong. Please try again.");
    //   }
    // }

    // try {
    //   const response = await axios.post(
    //     "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //     value
    //   );
    //   if (response.data.message == "success") {
    //     //toast for success
    //     toast.success("welcome to my store", {
    //       position: "top-center",
    //       duration: 3000,
    //     });
    //     //navigate login
    //     router.push("/home");
    //   }
    // } catch (error: any) {
    //     //toast for err
    //   toast.error(error.response.data.message, {
    //     position: "top-center",
    //     duration: 3000,
    //   });

    // }
  }

  return (
    <div className="container w-[90%]  mx-auto flex items-center gap-20 justify-eve' mt-5    p-10">
      <div className=" ms-auto text-center ">
        <Image className=" ms-auto" src={signInImage} alt="sign up image" />
      </div>
      <div className=" mx-auto ">
        <h1 className=" text-gray-950 text-3xl font-bold  ">
          Sign in to FreshCart
        </h1>
        <p className="mb-3">
          Welcome to FreshCart! Enter your email to get started.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-6 mt-5"
          >
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
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      {...field}
                    />
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

            <button
              type="submit"
              className="text-white bg-green-600 hover:bg-green-800 py-3 w-full rounded-md font-bold cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </Form>
        <div className="text">
          <p className="text-base font-medium mt-5">
            You don't have an account?
            <Link href={"/signup"} className="text-green-400 cursor-pointer">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
