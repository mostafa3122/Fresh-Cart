import * as z from "zod";

export const checkOutSchema = z.object({
  phone: z
    .string()
    .nonempty("Phone is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),

  city: z
    .string()
    .nonempty("City is required")
    .min(2, "City name is too short"),

  details: z
    .string()
    .nonempty("Address details are required")
    .min(5, "Details must be at least 5 characters"),
});
