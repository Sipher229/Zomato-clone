import SearchBox from "./SearchBox"
import Navbar from "./Navbar"
function IntroSection() {
  return (
    <div className={`w-full h-4/6 bg-introBackground bg-cover flex flex-col items-center justify-around gap-4 contrast-100 brightness-100`}>
      <Navbar />
      <div className="flex flex-col gap-4 w-full items-center justify-center self-center ">
        <h1 className="text-8xl text-center font-bigZomato text-white font-extrabold">Zomato</h1>
        <p className="text-4xl text-center font-generalFont text-white">Discover the best food & and drinks in Delhi NCR</p>
        <SearchBox />
      </div>
    </div>
  )
}

export default IntroSection