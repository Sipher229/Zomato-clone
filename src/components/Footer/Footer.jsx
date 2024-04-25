import {GlobeOutline, ChevronUp, WhatsappIcon, IGIcon, FbIcon, InIcon, YTIcon, XIcon} from "../../Utils/Utils"

function Footer() {
  return (
    <div className="flex flex-col gap-3 p-[5.4rem] w-full bg-gray-50">
    <div className="w-full flex justify-between items center my-3">
        <h1 className="font-bigZomato font-bold text-4xl">Zomato</h1>
        <div className="w-1/4 flex justify-center gap-5 items-center">
            <button className="w-28 h-9 border border-gray-600 rounded-md bg-white p-1 font-generalFont flex  justify-center  items-center gap-1"> 	&#127470; &#127475; India <ChevronUp /> </button>
            <button className="w-28 h-9 border border-gray-600 rounded-md bg-white p-1 flex items-center gap-1"> <GlobeOutline /> English <ChevronUp /> </button> 
        </div>
    </div>
    <div className='flex gap-32 '>
        <ul>
            <li className="text-lg my-2 ">About Zomato</li>
            <li className="text-gray-500"><a href="#">Who we are</a></li>
            <li className="text-gray-500"> <a href="#">Blog</a></li>
            <li className="text-gray-500"><a href="#">Work with us</a></li>
            <li className="text-gray-500"><a href="#">report fraud</a></li>
            <li className="text-gray-500"><a href="#">press kit</a></li>
            <li className="text-gray-500"><a href="#">Contact Us</a></li>
        </ul>
        <ul>
            <li className="text-lg my-2"> <a href="#">Zoma verse</a></li>
            <li  className="text-gray-500"><a href="#">Zomato BinKit</a></li>
            <li className="text-gray-500"><a href="#">Feeding India</a></li>
            <li className="text-gray-500"><a href="#">Hyperpure</a></li>
            <li className="text-gray-500"><a href="#">Zomaland</a></li>
        </ul>
        <ul>
            <li className="text-lg my-2">For restaurants</li>
            <li className="text-gray-500"><a href="#">Partner with us</a></li>
            <li className="text-gray-500"><a href="#">Apps for you</a></li>
        </ul>
        <ul>
            <li className="text-lg my-2">Learn more</li>
            <li className="text-gray-500"><a href="#">Privacy</a></li>
            <li className="text-gray-500"><a href="#">Security</a></li>
            <li className="text-gray-500"><a href="#">Terms</a></li>
            <li className="text-gray-500"><a href="#">Site Map</a></li>
        </ul>
        <ul>
            <li className="text-lg my-2">Social Links</li>
            <li>
                <div className="h-7 w-36 flex gap-2 items-center">
                    <a href="#"><WhatsappIcon /></a>
                    <a href="#"><FbIcon /></a>
                    <a href="#"><IGIcon /></a>
                    <a href="#"><YTIcon /></a>
                    <a href=""><InIcon /></a>
                    <a href=""><XIcon /></a>
                </div>
            </li>
            <li className="my-3"><input type="button" className="bg-googlePlay bg-no-repeat bg-10 w-40 h-10 rounded-md shadow-md" /> </li>
            <li><input type="button" className="bg-appStore bg-no-repeat bg-10 w-40 h-10 rounded-md shadow-md" /></li>
        </ul>

    </div>
    </div>
  )
}

export default Footer