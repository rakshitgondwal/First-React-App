import React from "react";



var currTime = new Date();
var year = currTime.getFullYear();

function Footer(){
    <footer className="footer text-center">
    <p className="footerp items-center justify-between">"Copyright @{year}"</p>
  </footer>
}

export default Footer;