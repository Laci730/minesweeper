import React from "react";
import Tile from "./tile";
import "./field.css";
import generateField from "../game-scripts/tile-numbers";


const Field = () => {

    const items = generateField(400, 40);

    return (
        <div className="field">
            {items.map(item => {
                return <Tile key={item.id} count={item.value} />;
            })}
        </div>
    );
}

export default Field;