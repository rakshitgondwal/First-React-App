import React from "react";
import "./styles.css"


function Body(props) {
  return (
    <div className="row">
      <div className="column">

        <div className=" mt-4 ml-4 mr-4 card">
          <div className="shadow-md bg-white rounded-lg p-4">
            <div className="">
              <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
              <p className="text-gray-700 text-base">{props.content}</p>
            </div>
          </div>
        </div>

      </div>
    </div>




  );
}


export default Body;