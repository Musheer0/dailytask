import { z } from "zod";

// Validation schema using Zod
export const CreateTaskSchema = z.object({
    name: z.string().min(4, "Task name must be at least 4 characters").max(126, "Task name must be less than 126 characters"),
    goals: z
      .array(z.string().min(3, "Goal must be at least 3 characters").max(64, "Goal must be less than 64 characters"))
      .min(1, "You must add at least 1 goal")
      .max(6, "You can add up to 6 goals"),
    duration: z.union([z.number(), z.literal(Infinity), z.literal(-1)]), // Supports no limit and custom duration
  });
  