/* eslint-disable react/prop-types */
import { useState } from "react"
import {Locality, localities} from "./index"
function SeeMoreBox(){
    const [showMore, setShowMore] = useState(false)
    const defaultNumLocalites = 8;


    const handleShowMore = ()=>{
        setShowMore(()=> !showMore)
    
      }


    return (
        <div className="flex gap-3 flex-wrap">
        { 
            showMore?
            localities.map((loc, index)=>{
            return(
              <Locality key={index} placeName={loc.name} numberOfPlaces={loc.number}/>
            ) 
            }):
            localities.slice(0,defaultNumLocalites).map((loc, index)=>{
                return(
                    <Locality key={index} placeName={loc.name} numberOfPlaces={loc.number}/>
                ) 
            })
           

        }
        <div className="w-80 h-20 rounded-md border flex items-center px-4 justify-center gap-3 bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-lg"
            onClick={handleShowMore}
            >
                <p>{showMore?"see less": "see more"}</p>
        </div>
          
        </div>
    )
}
export default SeeMoreBox