/* eslint-disable react/prop-types */


function CollectionBox({
    name= "Hip Holi Parties",
    numOfPlaces = "14 places",
    bg = ""
})
{
  return (
    <div className={`w-[16.5rem] h-[18rem] rounded-md flex flex-col justify-end bg-${bg} bg-no-repeat border bg-cover brightness-100 `}>
  
        <div className="pl-4 h-1/6 ">
            <p className="text-white font-generalFont">{name}</p>
            <p className="text-white font-generalFont">{numOfPlaces}</p>
        </div>
    </div>
  )
}

export default CollectionBox