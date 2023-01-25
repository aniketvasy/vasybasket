import React from 'react'
import { BsSearch } from "react-icons/bs";
const SearchBox = () => {
  return (
    <div className="search-box-comp">
    <div className="search-box">
        <BsSearch className='search-icon'/>
        <input className="search-box-input" placeholder={`Search "Milk"`}/>
    </div>
    </div>
  )
}

export default SearchBox