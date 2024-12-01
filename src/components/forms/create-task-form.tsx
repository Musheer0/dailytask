"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MinusCircleIcon, PlusCircleIcon, TimerIcon, TimerOff } from "lucide-react";
import { Div } from "@/components/ui/div";
import { CreateTaskSchema } from "@/lib/form-schemas/create-task-schema";
import axios from 'axios'
import { useCreateTask } from "@/features/server/api/use-create-task";
import BackButton from "../shared/back-button";

type CreateTaskType = z.infer<typeof CreateTaskSchema>;

const CreateTaskForm = () => {
  const [selectedDuration, setSelectedDuration] = useState<number | "Infinity" | -1>(10);
  const {mutate} = useCreateTask()
  const form = useForm<CreateTaskType>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: {
      name: "",
      goals: [""],
      duration: 10,
    },
  });

  const { watch, setValue } = form;
  
  const addGoal = () => {
    const goals = watch("goals");
    if (goals.length < 6) setValue("goals", [...goals, ""]);
  };
  const removeGoal = () => {
    const goals = watch("goals");
    if (goals.length > 1) setValue("goals",["",...goals.pop()||'']);
  };

  const onSubmit =async (data: CreateTaskType) => {
    const res = await mutate({
      json:data
    })
    console.log(res)
  };

  return (
    <div className="w-full  max-w-[500px]  mx-auto flex-1 flex items-center justify-center">
      <Card className="w-full border-none">
        <CardHeader>
          <BackButton>
          <Div variant="link" className="w-fit p-0">
            <ArrowLeft /> Cancel
          </Div>
          </BackButton>
          <CardTitle>Create New Task</CardTitle>
          <CardDescription>
            By creating a new task, you will receive daily push notifications to remind you of your task.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Task Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter task name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator />

              {/* Goals */}
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Set Your Goals</p>
                {watch("goals").map((goal, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={`goals.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder={`Goal #${index + 1}`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                {watch("goals").length < 6 && (
                  <Button variant="secondary" type="button" onClick={addGoal}>
                    <PlusCircleIcon className="m-2" /> Add another goal
                  </Button>
                )}
                     {watch("goals").length > 1 && (
                  <Button variant="secondary" type="button" onClick={removeGoal}>
                    <MinusCircleIcon className="m-2" />Remove Goal
                  </Button>
                )}
              </div>
              <Separator />

              {/* Duration */}
              <div>
                <p className="text-xl font-semibold">Set Task Duration</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {[10, 15, 30, 75, 90, Infinity].map((duration) => (
                    <FormField
                      key={duration}
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <label htmlFor={`duration-${duration}`} className="flex-1">
                            <Div variant={selectedDuration === duration ? "default" : "secondary"} className="w-full">
                          <input
                            type="radio"
                            id={`duration-${duration}`}
                            hidden
                            {...field}

                            onChange={(e) => {
                                console.log(duration)
                              field.onChange(duration);
                              setSelectedDuration(duration);
                            }}
                          />
                                              <TimerIcon /> 
                                              {duration} Days
                          </Div>
                        </label>
                      )}
                      
                    />
                  ))}
            
                </div>
              </div>


              {/* Submit */}
              <Button variant="auth" className="w-full" type="submit">
                Create Task
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateTaskForm;
