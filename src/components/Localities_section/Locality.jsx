/* eslint-disable react/prop-types */

import { ChevronRight } from "../../Utils/Utils"


function Locality({
    placeName="Connaught place",
    numberOfPlaces = "174 places"
}) {
  return (
    <div className="w-80 h-20 rounded-md border flex items-center px-4 justify-between bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-lg">
    <p className="font-light text-gray-500  text-lg  font-generalFont ">{placeName} <br/> {numberOfPlaces}</p>
    <p className="font-light text-gray-500 font-sans text-lg "> <ChevronRight /> </p>

    </div>
  )
}

export default Locality