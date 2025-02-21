import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="searchBox position-relative d-flex align-items-center">
        <IoSearchSharp className='searchIcon' />
        <input type=" text" placeholder='Search Here...'/>


    </div>
    
  )
}

export default SearchBox