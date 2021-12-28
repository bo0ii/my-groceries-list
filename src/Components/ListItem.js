import React, { useState } from "react";
import { ReactDOM } from "react";

function ListItem({ text }) {


    return (
        <div>
            <li>{text} {<button className="add-cart-button">Add to cart</button>}</li>
        </div>
    )
}

export default ListItem