import React, { useState } from "react";
import { ReactDOM } from "react";
import ListItem from "./ListItem";

function List(props) {
    
    return (
        <div>
            <ul>
                {props.groceries && props.groceries.map((grocery) => <ListItem text={grocery.text} id={grocery.id} key={grocery.id} />)}
            </ul>
        </div>
        
        // Hoe krijg ik de list gesplitst? Volgens school moet je 1 list kunnen gebruiken voor beide stukjes.. 
    )
}



export default List