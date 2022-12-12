import React from "react";
import { useState } from "react";
import "./field.css"

const Tile = () => {
    const [isFlipped, flipIt] = React.useState(1);

    /* function flipTile() {
        ;
    } */


    return (
        <div className="tile" onClick={() => flipIt(isFlipped + 1)}>{isFlipped}</div>
    );
}

export default Tile;