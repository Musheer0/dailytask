"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { CreateTaskSchema } from "@/lib/form-schemas/create-task-schema";
import { z } from "zod";
function addDaysToDate(days:number) {
    const currentDate = new Date(); // Get the current date
    currentDate.setDate(currentDate.getDate() + days); // Add the specified number of days
    return currentDate
}
export default async function CreateTask(payload: z.infer<typeof CreateTaskSchema>) {
  console.log("CreateTask function called", payload);

  const session = await auth();
  console.log("Session:", session);

  if (!session?.user) {
    console.log("Unauthorized access");
    return { error: "Unauthorized", statusCode: 403 };
  }

  try {
    if (!payload) {
      console.log(payload, "Payload is invalid");
      return { error: "Invalid payload", statusCode: 400 };
    }
    const validation = CreateTaskSchema.safeParse(payload);
    if (!validation.success) {
        console.error("Validation errors:", validation.error);
        return { error: validation.error.message, statusCode: 400 };
    }
    console.log("Validated payload:", validation.data);
    console.log("Payload before Prisma call:", payload);

    const task = await prisma.task.create({
      data: {
        userId: session.user.id!,
        name: payload.name,
        goals: payload.goals,
        duration: payload.duration,
        endedAt: addDaysToDate(payload.duration),
      },
    });

    console.log("Task created:", task);
    console.log("Payload after Prisma call:", payload, "pr2");

    return { data: task, statusCode: 200 };
  } catch (error) {
    console.error("Error creating task:", error);
    return { error: "Internal server error", statusCode: 500 };
  }
}
