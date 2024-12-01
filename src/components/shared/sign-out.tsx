"use client"
import { signOut } from 'next-auth/react'
import React, { ReactNode } from 'react'

const SignOut = ({children}:{children:ReactNode}) => {
  return (
    <div className=''
    onClick={()=>{
        signOut
    }}
    >
        {children}
    </div>
  )
}

export default SignOut