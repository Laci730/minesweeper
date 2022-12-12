import React from "react";
import Tile from "./tile";
import "./field.css"

const Field = () => {
    return (
        <div className="field">
            <Tile className="a" />
            <Tile className="b" />
            <Tile className="c" />
            <Tile className="b" />
            <Tile className="c" />
            <Tile className="d" />
            <Tile className="c" />
            <Tile className="d" />
            <Tile className="e" />
        </div>
    );
}

export default Field;