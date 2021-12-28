import React, { useState } from "react";
import { ReactDOM } from "react";
import AddGroceryForm from "./InputField";
import List from "./List";

function GroceryList({ groceries, setGroceries }) {


    function onGrocerySubmit(grocery) {
        setGroceries([
            ...groceries,
            grocery
        ]);

    }



    return (
        <div>
            <h1>Boodschappenlijst</h1>
            <AddGroceryForm
                onGrocerySubmit={onGrocerySubmit}
            />
            <List groceries={groceries} />
        </div>
    )
}

export default GroceryList
