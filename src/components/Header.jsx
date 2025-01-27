import React, { useState } from 'react'

import { IoMdHome } from "react-icons/io";
import { IconContext } from "react-icons";

const Header = (prop) => {
  const [houseNameFilter,setHouseNameFilter] = useState('')
  const [houseNameSearch, setHouseNameSearch] = useState('')
  function likedHouses(){
    const data = prop.data.filter((x)=>{
      return prop.likedHouses.indexOf(x.name)>-1
    })
    prop.setFilteredData(data)
  }
  function homeButton(){
    prop.setFilteredData(prop.data)
  }
  function searchButton(){
    if (houseNameSearch == ''){
      alert('Please enter a house name')
    }
    else{
      let data = prop.data.filter((x)=>{
        return x.name.toLowerCase() == houseNameSearch.toLowerCase()
      })
      prop.setFilteredData(data)
    }
  }
  return (
    <div className='bg-gray-100 flex flex-col justify-between px-20 py-5 md:flex-row'>

      <IconContext.Provider value={{ color: "green" , size:'2.5em'}}>
        <IoMdHome onClick={homeButton} className='cursor-pointer'/>
      </IconContext.Provider>

      <p className='text-[#6C757D] text-4xl font-semibold'>Search properties to rent</p>

      <div className='flex flex-col md:flex-row gap-2'>
        <input type='text' onChange={(e)=>{setHouseNameSearch(e.target.value)}} placeholder='Type name of house' className='border border-slate-400 py-1 px-2 rounded-md'></input>
        <button onClick={searchButton} className='border rounded-md px-2 py-1 border-slate-400 transition-colors duration-1000 ease-in-out hover:bg-black hover:text-white'>Search</button>
        <button onClick={likedHouses} className='border rounded-md px-2 py-1 border-slate-400 transition-colors duration-1000 ease-in-out hover:bg-black hover:text-white'>Liked</button>
      </div>

    </div>
  )
}

export default Header
