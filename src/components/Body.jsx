import React from 'react'
import { FaRupeeSign, FaHeart } from "react-icons/fa";
import { CgShapeRhombus } from "react-icons/cg";
import { PiBathtubLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";


const Body = (prop) => {
  const heartClicked =(e)=>{
    let houseName = e.target.parentElement.parentElement.parentElement.parentElement.children[1].innerText
   
    if (e.target.parentElement.style.color == 'rgb(108, 117, 125)'){ 
      //brown to red 
      e.target.parentElement.style.color = 'rgb(220,53,69)'
      prop.setLikedHouses([...prop.likedHouses, houseName])
      // const index = prop.likedHouses.find()
    }
    else{
      //red to brown
      let indexOfIteamToBeRemoved= prop.likedHouses.indexOf(houseName)
      if(indexOfIteamToBeRemoved>-1){ 
        console.log("indexOfIteamToBeRemoved",indexOfIteamToBeRemoved)
        const updatedLikedHouses = prop.likedHouses
        updatedLikedHouses.splice(indexOfIteamToBeRemoved,1)
        console.log("updated houses ",updatedLikedHouses)
        prop.setLikedHouses(updatedLikedHouses) 
      }
      e.target.parentElement.style.color = 'rgb(108, 117, 125)'
    }
  }
  console.log(prop.likedHouses)
  return (
    <div className='mx-[10%] mt-5 flex flex-wrap gap-20'>
        {/* one card */}
        {prop.filteredData.map((data,key)=>{
          
          return(
            <div key ={key} className='border rounded-lg max-w-[350px] md:w-[100%] h-[100%] m-auto'>
            <img className='border rounded-t-lg max-h-[250px] h-[100%] w-[100%]' alt='' src={data.image}/>
            <div>
                <div className='flex justify-between m-3'>
                <div className='text-[#0D6EFD] text-2xl flex'><p className='mt-[5px]'><FaRupeeSign /></p>{data.price}/day</div>
                <div className='mt-[5px] cursor-pointer' key={key+100} onClick={heartClicked}><FaHeart color='#6C757D' size={25}/></div>
                {/* 6C757D grey*/}
                {/* DC3545 red */}
                </div>
                <p className='mx-3' key={data.name}>{data.name}</p>
                <p className='mx-3 border-b pb-2'>{data.address}, {data.city}</p>
            </div>
            <div className='mx-3 flex p-3 justify-between'>
              <div className='flex'><LiaBedSolid size={25}/>{data.info.bed} Beds</div>
              <div className='flex'><PiBathtubLight size={25}/>{data.info.bathrooms} Bath</div>
              <div className='flex'><CgShapeRhombus size={25}/>{data.info.area} </div>             
            </div>
        </div>
          )
        })}


    </div>
  )
}

export default Body