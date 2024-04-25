import {foodOptionsArray, } from "./optionsArray"
import OptionsBox from "./OptionsBox"
function OptionsSection() {
  return (

    <div className="flex flex-col p-[5.4rem] gap-4">
        <h1 className="text-4xl my-6 font-semibold">Explore options near me</h1>
        <OptionsBox diplayText="Popular cuisines near me" optionsArray={foodOptionsArray}/>
        <OptionsBox diplayText="Popular restaurants near me" optionsArray={foodOptionsArray}/>
        <OptionsBox diplayText="Top restaurant chains near me" optionsArray={foodOptionsArray}/>
        <OptionsBox diplayText="Cities we deliver to near me" optionsArray={foodOptionsArray}/>
    </div>
  )
}

export default OptionsSection