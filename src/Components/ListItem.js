import React, { useState } from "react";
import { ReactDOM } from "react";

function ListItem(props) {


    return (
        <div>
            <li onClick={() => props.increaseShoppingCartItem && props.increaseShoppingCartItem(props.item)}><p>{props.item.text}</p>
                {!props.isCart && <button onClick={() => props.onTransferGroceryItemToShoppingCar(props.item)} className="add-cart-button">Add to cart</button>}
                <p>{props.isCart && props.item.qty}</p>

            </li>
        </div>
    )
}

export default ListItem