import React, { useState } from "react";
import { ReactDOM } from "react";



function AddGroceryForm({
    onGrocerySubmit
}) {

    const [inputText, setInputText] = useState("")

    function inputTextHandler(event) {
        setInputText(event.target.value);

    }

    function createNewGrocery(event) {
        event.preventDefault()
        onGrocerySubmit({
            text: inputText, id: Math.random() * 1000
        });
        setInputText('');
    }


    return (

        < div >
            <form>
                <input value={inputText} type="text" onChange={inputTextHandler} />
                <button onClick={createNewGrocery} type="submit" >Add Groceries</button>
            </form>
        </div >
    )

}


export default AddGroceryForm