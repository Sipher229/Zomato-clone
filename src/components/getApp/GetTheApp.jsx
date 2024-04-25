import { useState } from "react";
import getTheApp from "../../assets/image_resources/zomato_image_resources/getTheApp.png"
function GetTheApp() {

    const [checkedEmail, setCheckedEmail] = useState(false);
    const [checkedTel, setCheckedTel ] = useState(true);

    const handleChecked = () =>{
        setCheckedEmail((prev)=> !prev)
        setCheckedTel((prev)=>!prev)

    }
    
  return (
    <div className="w-full h-[30rem] bg-getAppBg flex justify-center items-center gap-16 my-28 box-border">

      <div className=" bg-transparent w-1/3 h-80 flex justify-end items-center">
        <img src={getTheApp} className="w-36 h-52"/>
      </div>  
      <div className="h-full w-2/3 flex flex-col p-12 box-border  gap-4">

        <h1 className="text-4xl font-semibold w-full">Get the zomato app</h1>
        <p className="font-generalFont font-light w-full ">We will send you a link. Open it on your phone to download  <br /> the app</p>

        <form className="flex flex-col w-full">
            <div className="flex w-full h-6 gap-4 items-center">
                <input type="radio" name="email" id="email" className="size-5" checked={checkedEmail} onChange={handleChecked}/>
                <label htmlFor="email" className="text-lg">Email</label>
                <input type="radio" name="tel" id="tel" className="size-5" checked={checkedTel} onChange={handleChecked}/>
                <label htmlFor="tel" className="text-lg" >Phone</label>
            </div>
            <div className="flex w-full h-28 gap-3 items-center">
                {
                checkedEmail?<input
                type="email"
                className="bg-white border border-gray-700 w-72 h-12 rounded-md my-7 text-xl focus:outline focus:outline-blue-500 px-3"
                placeholder="Email"
                 />
                :<div className="w-72 h-12 flex items-center border border-gray-700  bg-white rounded-md overflow-hidden p-1">

                <select className="w-3/12 h-full bg-white" id="CountryCodes">
                  <option value={"+91"}>+91</option>
                </select>
                <div className="w-0 h-8 border border-y-0 border-x"></div>
                <input
                type="tel"
                className="bg-white w-9/12 h-full rounded-md my-7 text-xl  px-3 outline-none"
                placeholder="type here..."
                
                 />
                </div>
                }
                <button className="w-36 h-12 bg-red-500 text-white font-generalFont rounded-md font-light">Share App Link</button>
            </div>
        </form>
        <p className="font-light font-generalFont text-gray-400">Download the app from</p>
        <div className="flex items-center gap-2 min-w-48 h-14">
          <button className="bg-googlePlay bg-no-repeat bg-10 w-40 h-10 rounded-md shadow-md"></button>
          <button className="bg-appStore bg-no-repeat bg-10 w-40 h-10 rounded-md shadow-md"></button>
        </div>
      </div>  
     
    </div>
  )
}

export default GetTheApp