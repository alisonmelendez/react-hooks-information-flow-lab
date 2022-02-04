import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ itemsToDisplay, onCategoryChange }) {

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter CategoryChange={onCategoryChange}/>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
