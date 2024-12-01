import React from 'react'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PersonalChart } from '@/components/charts/personal-chat'
import TaskCounts from '@/components/dashboard/task-counts'

const page = () => {
  return (
   <div className='w-full p-2 flex-col flex  flex-1  '>
    
       <CardTitle>
        Hello Musheer
       </CardTitle>
       <div className="task p-2 px-6 bg-foreground text-background border rounded-full w-fit">
        <p className='font-semibold'>Task: Workout</p>
       </div>
        <TaskCounts/>
        <Separator/>
        <PersonalChart/>
   </div>
  )
}

export default page