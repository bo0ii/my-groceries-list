import React, { useState } from "react";
import { ReactDOM } from "react";
import List from "./List";

function ShoppingCart(props) {

    console.log(props.emptyCart)
    return (
        <div>
            <h1>Winkelmandje</h1>
            <button onClick={() => props.emptyCart()} className="delete-button">Empty Cart</button>
            <List groceries={props.cartItems} isCart={true} increaseShoppingCartItem={props.increaseShoppingCartItem} />
        </div>
    )
}


export default ShoppingCart