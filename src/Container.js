import React, { useState } from "react";
import ReactDOM from "react-dom";
import GroceryList from "./Components/GroceryList";
import ShoppingCart from "./Components/ShoppingCart";

function Container() {
  const [groceries, setGroceries] = useState([])
  const [cartItem, setCartItem] = useState([])

  return (



    <div className="Container">
      <div className="GroceryList">
        <GroceryList groceries={groceries} setGroceries={setGroceries} />
      </div>
      <div className="ShoppingCart">
        <ShoppingCart />
      </div>
    </div>

  )

}

export default Container