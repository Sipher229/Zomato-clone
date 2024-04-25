/* eslint-disable react/prop-types */

function ServiceBox({
    path = "",
    title = "Name of service",
    desc = "Text describing the service mentioned above"

}) {
  return (
    <div className="w-[22rem] h-60 border flex flex-col rounded-md overflow-hidden my-5 box-border hover:scale-105 hover:ease-in-out duration-300 cursor-pointer">
        <div className="h-4/6 w-full">
            <img src={path} className="h-full w-full object-cover" />
        </div>
        <div className="pl-4 flex flex-col justify-center items-start h-1/3">
        <h3 className=" text-2xl font-generalFont">{title}</h3>
        <p className="text-gray-600 font-generalFont font-light">{desc}</p>
        </div>

    </div>
  )
}

export default ServiceBox