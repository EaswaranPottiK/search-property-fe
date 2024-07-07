import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col md:flex-row justify-stretch gap-2 mx-[10%] border p-4 mt-5 bg-[#F8F9FA] rounded-lg'>
        {/* to allow content items to fill the available space along the container’s main axis: */}
        <div className='w-full'>
            <p>Enter City Name</p>
            <input type='text' className='border rounded-md w-full h-8'/>
        </div>
        <div className='border-r-2'></div>

        <div className='w-full'>  
            {/* Note i have used width full here so that  input box uses full space */}
            <p>Date</p>
            <input type='date' className='border rounded-md w-full h-8'/>
        </div>
        <div className='border-r-2'></div>

        <div className='w-full'>
            <p>Price</p>
            <select className='border rounded-md w-full h-8'>
                <option value="all">All Prices</option>
                <option value='500'>Rs 0 to 500</option>
                <option value="1000">Rs 500 to 1000</option>
                <option value="1500">Rs 1000 to 1500</option>
                <option value="2000">Rs 1500 to 2000</option>
                <option value="2500">Rs 2000 to 2500</option>
                <option value="3000">Rs 2500 to 3000</option>
            </select>
        </div>
        <div className='border-r-2'></div>

        <div className='w-full'>
            <p>Property type</p>
            <select className='border rounded-md w-full h-8'>
                <option value="All">All</option>
                <option value="House">House</option>
                <option value="PG">PG</option>
                <option value="Farm-house">Farm-house</option>
                <option value="Villa">Villa</option>
                <option value="Hotel">Hotel</option>
                <option value="Oyo">Oyo</option>
            </select>
        </div>
        <div className='border-r-2'></div>

        <button className='text-white bg-[#0D6EFD] px-2 rounded-lg h-10 mt-auto px-4'>Submit</button>

    </div>
  )
}

export default Search