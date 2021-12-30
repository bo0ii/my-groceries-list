import React, { useState } from "react";
import { ReactDOM } from "react";
import ListItem from "./ListItem";

function List(props) {

    const renderGroceryItems = () => {

        if (props.groceries) {
            return (props.groceries.map(grocery => {
                return <ListItem
                    item={grocery}
                    id={grocery.id}
                    key={grocery.id}
                    isCart={props.isCart}
                    onTransferGroceryItemToShoppingCar={props.onTransferGroceryItemToShoppingCar}
                    increaseShoppingCartItem={props.increaseShoppingCartItem} />
            }))
        }
    }

    return (
        <div>
            <ul>
                {renderGroceryItems()}
            </ul>
        </div>


    )
}



export default List