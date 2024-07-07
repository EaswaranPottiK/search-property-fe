import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
import data from './components/data'

const App = () => {
  const [filteredData, setFilteredData] = useState(data)
  const [likedHouses, setLikedHouses] = useState([])
  console.log(likedHouses)
  return (
    <div >
    <Header likedHouses={likedHouses} data={data}/>
    <Search/>
    <Body filteredData = {filteredData} likedHouses={likedHouses} setLikedHouses ={setLikedHouses}/>
    </div>
  )
}

export default App