import React, { useState } from "react";
import { ReactDOM } from "react";
import AddGroceryForm from "./AddGroceryForm";
import List from "./List";

function GroceryContainer(props) {
    
    return (
        <div>
            <h1>Boodschappenlijst</h1>
            <AddGroceryForm
                onGrocerySubmit={props.onGrocerySubmit}

            />
            <List
                groceries={props.groceries}
                onTransferGroceryItemToShoppingCar={props.onTransferGroceryItemToShoppingCar} />
        </div>
    )
}

export default GroceryContainer

