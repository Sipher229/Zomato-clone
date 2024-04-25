import { useState } from "react"
import { MapPin, SearchIcon } from "../../Utils/Utils"

function SearchBox() {
    const [searchValues, setSearchValues] = useState({
        locationSeach: "",
        generalSearch: ""
    })
  return (
 
    <div className='bg-white flex gap-1 items-center w-[49rem] h-12 overflow-hidden rounded-md shadow-md px-2'>
        <MapPin />
        <input
        className='bg-white w-4/12 h-full outline-none font-generalFont font-light text-gray-950'
        placeholder='Connaught Place, New Delhi'
        name = "LocationSeach"
    
        />
        
        <div className="w-0 h-5 border-x border-gray-400 mr-3 "></div>
        <SearchIcon />
        <input
        className='bg-white w-6/12 outline-none h-full font-generalFont font-light text-gray-950'
        placeholder='Search for a restaurant, cuisine or a dish'
        name = 'generalSearch'

        />
    </div>
  )
}

export default SearchBox