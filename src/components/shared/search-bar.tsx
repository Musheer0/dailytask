import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center gap-1 bg-zinc-900 flex-1 p-2 px-3 rounded-full text-sm text-zinc-400'><SearchIcon size={16}/> Search your daily task</div>
  )
}

export default SearchBar