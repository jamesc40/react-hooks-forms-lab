import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSetItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setFilter] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: "Produce"
  });

  const onFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onItemFormSubmit = (e, obj) => {
    e.preventDefault();
    onSetItems([...items, obj])
    setFormData({
      id: '',
      name: '',
      category: "Produce"
    })
  }

  const onSearchChange = (e) => setFilter(e.target.value);
  const filteredFoods = items.filter(food => food.name.includes(searchFilter) ? food : null)
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const renderFoods = (list) => {
    return list.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  }
  

  return (
    <div className="ShoppingList">
      <ItemForm data={formData} onItemFormSubmit={onItemFormSubmit} onFormChange={onFormChange}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchFilter}/>
      <ul className="Items">
        {searchFilter === '' ? renderFoods(itemsToDisplay) : renderFoods(filteredFoods)}
      </ul>
    </div>
  );
}

export default ShoppingList;
