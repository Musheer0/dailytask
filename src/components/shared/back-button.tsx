"use client"
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

const BackButton = ({children}:{children:ReactNode}) => {
    const router = useRouter()
  return (
    <button
    className='w-fit p-0'
    onClick={()=>router.back()}>
        {children}
    </button>
  )
}

export default BackButton