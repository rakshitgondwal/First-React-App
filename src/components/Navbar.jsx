import React from "react";
import "./styles.css"


function Navbar(){
    return(
        <nav className="shadow-md bg-white border-gray-200 px-4 py-5 dark:bg-gray-900 navabar" style={{backgroundColor: "#f5ba13"}}>
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a className="flex items-center">
        <span className="self-center mx-4 text-xl font-semibold whitespace-nowrap dark:text-white ">Keeper</span>
      </a>
    </div>
  </nav>
    )
}

export default Navbar;