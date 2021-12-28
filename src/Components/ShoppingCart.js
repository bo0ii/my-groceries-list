import React, { useState } from "react";
import { ReactDOM } from "react";
import List from "./List";

function ShoppingCart({cartItem, setCartItem}) {

    // Hier useState cartItems?? Of moet die naar de container component?
    
    
    return (
        <div>
            <h1>Winkelmandje</h1>
            <button className="delete-button">Empty Cart</button>
            <List cartItem={cartItem} /> {/* Hier doorgeven aan list? */}
        </div>
    )
}


export default ShoppingCart