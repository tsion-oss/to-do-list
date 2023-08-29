import { useState } from "react"

export default function TodoList () {
    const [ListItems, setListItems] = useState(['Bakery and Bread', 'Meat', 'Seafood', 'Pasta', 'Rice', 'Oils'])

    return (
     <div>
     
      <h2>Add your list of items</h2>
      <form>
        <input></input>
        <button>Add</button>
      </form>


       {ListItems.map((list) => (
        <div>
          <h2>{list}</h2>
        </div>
       ))}
     </div>
    )
}