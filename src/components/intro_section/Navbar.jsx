
function Navbar() {

  return (
    <div className="flex justify-between items-center px-20 w-full h-3 ">
      <a href="#" className="text-white underline cursor-pointer font-generalFont">Get the app</a>
      <div className="flex gap-4 font-generalFont mr-6">
        <a href="#" className="no-underline text-white font-generalFont font-light text-lg">Investor relations</a>
        <a href="#" className="no-underline text-white font-generalFont font-light text-lg">Add restaurant</a>
        <button className="text-white font-generalFont font-light text-lg">Log in</button>
        <button className="text-white font-generalFont font-light text-lg">Sign up</button>
      </div>

    </div>
  )
}

export default Navbar