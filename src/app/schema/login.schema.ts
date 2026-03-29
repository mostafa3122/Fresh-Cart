import * as z from "zod";
export const loginSchema = z.object({
  email: z.string().nonempty("Email is Required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is Required")
    .min(6, "Password too short")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
      "Must be 8+ chars, include upper & lower case, number, and special char."
    )
});
