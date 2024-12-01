import React from 'react'
import Logo from '../logo'
import { UserDropDown } from './user-icon'
import SearchBar from './search-bar'

const Navbar = () => {
  return (
  <nav className='flex sticky top-0 z-50 bg-background/40 backdrop-blur-xl gap-3 items-center justify-between w-full py-2 border-b px-1'>
   <Logo/>
   <SearchBar/>
   <UserDropDown/>
  </nav>
  )
}

export default Navbar