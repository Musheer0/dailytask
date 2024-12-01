import QueryProviders from '@/components/contex-providers/query-provider'
import Navbar from '@/components/shared/navbar'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='flex flex-col  min-h-screen w-full'>
      <QueryProviders>
        <Navbar/>
        {children}
        </QueryProviders>
    </main>
  )
}

export default layout