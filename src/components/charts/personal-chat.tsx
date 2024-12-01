"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const totalTasks = 400; // Hypothetical total tasks per month

const chartData = [
  { month: "January", desktop: 586},
  { month: "February", desktop: 605},
  { month: "March", desktop: 537 },
  { month: "April", desktop: 273},
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  forgort: {
    label: "Forgot to Answer",
    color: "hsl(var(--chart-2))",
  },
  missed: {
    label: "Missed Days",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;


export function PersonalChart() {
  return (
 <div className="w-full flex-1 h-full max-h-1/2">
 
 </div>
  )
}
