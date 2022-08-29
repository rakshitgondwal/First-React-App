import React from "react";
import Navbar from "./format/Navbar";
import Body from "./format/Body";
import Footer from "./format/Footer";
import Notes from "../notes"


function Card() {
    return (
        <div>
            <Navbar />
            {Notes.map(note =>
            (<Body
                key={note.key}
                title={note.title}
                content={note.content}
            />)
            )}
            <Footer />
        </div>
    )
}

export default Card;