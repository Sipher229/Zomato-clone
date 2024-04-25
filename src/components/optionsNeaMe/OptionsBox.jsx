/* eslint-disable react/prop-types */

import { useState } from "react"


function OptionsBox({
    diplayText="Popular Cuisines near me",
    optionsArray=[]
})
{
    const [isActive, setIsActive] = useState(false)
    function handleClick(){
        setIsActive((prev)=>!prev)
    }
  return (
    <div className="flex flex-col justify-center p-5 gap-4 rounded-md w-full min-h-16 border shadow-sm cursor-pointer" onClick={handleClick}>
        <p className="ml-3 text-xl text-gray-700">{diplayText}</p>
        {
            isActive?
            <div className="w-full min-h-32 p-7">
                <ul className="list-disc list-outside flex flex-wrap gap-7 ">
                {
                    optionsArray.map((option, index)=>{
                        return (
                            <li key={index} className="text-gray-400 hover:text-gray-700 text-sm"> <a href="#" className="font-light font-generalFont text-gray-400 cursor-pointer hover:text-gray-700 text-lg">{option}</a></li>
                        )
                    })
                }
                </ul>
            </div>:
            ""
        }
        
    </div>
  )
}

export default OptionsBox