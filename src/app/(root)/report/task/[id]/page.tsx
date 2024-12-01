"use client"
import { fireworkEffect } from '@/components/shared/fireworks-confetti'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Div } from '@/components/ui/div'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const page = () => {
  const [response,setResponse]  = useState<Boolean|null>(null);
  return (
    <div className='flex items-center justify-center flex-1 relative'>
        <div className={cn(
            "glow transition-all duration-700 absolute top-0 left-0 w-1/2 h-1/2  blur-3xl mix-blend-lighten opacity-15",
            response===true && 'bg-emerald-500',
            response===false && 'bg-destructive opacity-30'
        )}></div>
        <div className={cn(
            "glow transition-all duration-700 absolute bottom-0 right-0 w-1/2 h-1/2  blur-3xl mix-blend-lighten opacity-15",
            response===true && 'bg-emerald-500',
            response===false && 'bg-destructive opacity-30'
        )}
        
        ></div>
        <Card className={cn(
            "border-none px-2 space-y-2 ",
        )}>
            <CardHeader className={cn(
                'px-0 transition-all duration-1000 ease-in-out ',
                response!==null && 'blur-xl opacity-0 '

            )}>
                <CardDescription>
                    Task: my 2025 glow up 
                    started at 15 jun 2025 
                </CardDescription>

                <CardTitle>
                    Did you completed  the goal :
                    " <span className='text-orange-500'>do gym for 5 hrs</span>" today?
                </CardTitle>
                <CardDescription>
                    Please slide to  yes if completed else no(remeber its you vs you be honest)
                </CardDescription>
            </CardHeader>
              <CardContent className={cn(
                'flex items-center relative p-0 overflow-hidden',
              )}>
                <div className={cn(
                    'yes transition-all duration-1000 z-50 ease-in-out font-bold text-xl absolute w-full h-full top-full bg-gradient-to-b from-emerald-600 to-emerald-900 flex items-center justify-center rounded-xl',
                    response==true && 'top-0'
                )}>
               Yay, you did it!
                 </div>
                 <div className={cn(
                    "yes transition-all duration-1000 z-50 ease-in-out font-bold text-xl absolute w-full h-full top-full bg-gradient-to-b from-red-600 to-red-900 flex items-center justify-center rounded-xl",
                    response==false && 'top-0'
                 )}>
                really?, don&apos;t miss next time
                 </div>
             <Button disabled={response!==null} onClick={()=>{
                fireworkEffect()
                setResponse(true)}} className='p-10 text-xl rounded-r-none border-l flex-1' variant={'outline'}> Yes</Button>
             <Button disabled={response!==null}  onClick={()=>{setResponse(false)}} className='p-10 text-xl rounded-l-none border-r border-l-0 flex-1' variant={'outline'}> No</Button>
              </CardContent> 
            <CardFooter className={cn(
                'px-0 transition-all duration-1000 ease-in-out ',
                response!==null && 'blur-xl opacity-0 '

            )}>
                <CardDescription>
                    Day 56
                    <br/>
                    Missed days :1
                    <br/>
                    completed days 55
                </CardDescription>
            </CardFooter>
        </Card>
    </div>
  )
}

export default page