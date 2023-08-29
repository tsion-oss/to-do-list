import { useState } from "react"

export default function TodoList () {
    const [ListItems, setListItems] = useState(['Bakery and Bread', 'Meat', 'Seafood', 'Pasta', 'Rice', 'Oils'])

    const [newItem, setNewItem] = useState('')

    console.log(newItem)

   const handleChange = (e) => {
     const value = e.target.value
     setNewItem(value)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem !== '') { 
      setListItems([...ListItems, newItem])
      setNewItem('')
    }
   }

    return (
     <div>
     
      <h2>Add your list of items</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add your item"  onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>


       {ListItems.slice().reverse().map((list) => (
        <div >
            <ul>
               <li><h2>{list}</h2></li> 
            </ul>
          
        </div>
       ))}
     </div>
    )
}