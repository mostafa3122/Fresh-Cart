import * as z from "zod";
export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is Required")
      .min(3, "Min length is 3 ")
      .max(15, "Max length is 15"),
    email: z.string().nonempty("Email is Required").email("Invalid email"),
    password: z
      .string()
      .nonempty("Password is Required")
      .min(6, "Password too short")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
        "Must be 8+ chars, include upper & lower case, number, and special char."
      ),
    rePassword: z.string().nonempty("Confirm Password is Required"),
    phone: z
      .string()
      .nonempty("Phone is Required")
      .regex(/^01[0125][0-9]{8}$/, "invalid phone number"),
  })
  .refine((object) => object.password === object.rePassword, {
    path: ["rePassword"],
    error: "password & rePassword not match...!",
  });
