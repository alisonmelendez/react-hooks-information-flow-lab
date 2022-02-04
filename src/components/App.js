import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header  from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  }

  const itemsToDisplay = itemData.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList onCategoryChange= {handleCategoryChange} itemsToDisplay={itemsToDisplay} items={itemData} />
    </div>
  );
}

export default App;
