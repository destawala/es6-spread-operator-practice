import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>
function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }
  function handleSubmit(event) {
    setItemList([...itemList, event.target.item.value]);
    setItem("");
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input name="item" type="text" onChange={handleChange} value={item} />
          <button>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {/* <li>A Item </li> */}
          {itemList.map((i, id) => (
            <li key={id}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
