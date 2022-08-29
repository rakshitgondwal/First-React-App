import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import Notes from "../notes"

function createNotes (note){
return (
    <Body 
    key = {note.key}
    title = {note.title}
    content = {note.content}
    />
 )
}


function Card(props){
return(
    <div>
    <Navbar />
    {Notes.map(createNotes)}
    <Footer />
</div>
)
}

export default Card;