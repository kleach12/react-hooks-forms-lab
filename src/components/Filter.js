import React, {useState} from "react";
import items from "../data/items";

function Filter({
   onCategoryChange, 
   search,
   onSearchChange}) {
  
    function handleOnSearchChange(e){
      console.log(e.target.value);
      onSearchChange(e.target.value)
    }

  return (
    <div className="Filter" >
      <input type="text" name="search" placeholder="Search..." onChange={handleOnSearchChange} value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
