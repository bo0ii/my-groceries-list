import React, { useState } from "react";
import ReactDOM from "react-dom";
import GroceryContainer from "./Components/GroceryContainer";
import ShoppingCart from "./Components/ShoppingCart";

function Container() {
  const [groceries, setGroceries] = useState([])
  const [cartItems, setCartItems] = useState([])



  function onGroceryCreated(grocery) {
    setGroceries([
      ...groceries,
      grocery
    ]);

  }

  function transferToShoppingCart(item) {
    setCartItems([
      ...cartItems,
      item
    ])
  }

  function increaseShoppingCartItem(item) {
    const index = cartItems.findIndex(e => e.id === item.id)
    console.log(index)
    const newItems = cartItems
    newItems[index].qty += 1
    setCartItems([
      ...newItems
    ])
    console.log(cartItems)
  }
  // Functie die shoppingCart aanpast
  // Daarin de cartItems vervangen met nieuwe cartItems waarin QTY +1
  // Vervolgens binnen Array item op juiste plaats kan vinden (ID?)
  // Vervangen item uit array op plaats x met nieuw item.

  function emptyCart() {
    setCartItems([])
  }

  return (



    <div className="Container">
      <div className="GroceryList">
        <GroceryContainer
          groceries={groceries}
          onGrocerySubmit={onGroceryCreated}
          onTransferGroceryItemToShoppingCar={transferToShoppingCart} />
      </div>
      <div className="ShoppingCart">
        <ShoppingCart cartItems={cartItems} emptyCart={emptyCart}
          increaseShoppingCartItem={increaseShoppingCartItem} />
      </div>
    </div>

  )

}

export default Container