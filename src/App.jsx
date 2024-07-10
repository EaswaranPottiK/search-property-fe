import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
import data from './components/data'

const App = () => {
  const [filteredData, setFilteredData] = useState(data)
  const [likedHouses, setLikedHouses] = useState([])
  
  return (
    <div >
    <Header likedHouses={likedHouses} setFilteredData={setFilteredData} data={data}/>
    <Search setFilteredData={setFilteredData} data={data}/>
    <Body filteredData = {filteredData} likedHouses={likedHouses} setLikedHouses ={setLikedHouses}/>
    </div>
  )
}

export default App