import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Image src={'/logo.png'} width={42} height={42} alt='logl'/>
       <p className='font-bold text-sm'>DailyTask</p></div>
  )
}

export default Logo