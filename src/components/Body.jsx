import React from "react";



function Body(){
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4 ml-8 ">
    <div className="shadow-md bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
      <div className="">
        <div className="text-gray-900 font-bold text-xl mb-2">This is the note title.</div>
        <p className="text-gray-700 text-base">This is the note content.</p>
      </div>
    </div>
  </div>
    )
}


export default Body;