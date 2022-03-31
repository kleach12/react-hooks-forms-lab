import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
    const [itemName, setItemName] = useState(" ");
    const [itemCategory, setItemCategory] = useState("Produce");

    function handleNewItemName(e){
      //console.log(e.target.value)
      setItemName(e.target.value)
    }

    function handleNewItemCategory(e){
      setItemCategory(e.target.value)
      //console.log(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: itemName,
        category: itemCategory,
      };
      onItemFormSubmit(newItem);
      setItemName("")
      setItemCategory("Produce")
      //console.log(newItem)
    }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName} value = {itemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
