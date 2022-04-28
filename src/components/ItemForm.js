import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({data, onItemFormSubmit, onFormChange}) {

  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, {...data, id: uuid()})}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={onFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={data.category} onChange={onFormChange}>
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
