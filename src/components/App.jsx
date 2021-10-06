import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>
function App() {
  const [itemList, setItemList] = useState([]);

  function handleSubmit(event) {
    setItemList([...itemList, event.target.item.value]);

    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input name="item" type="text" />
          <button>
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {/* <li>A Item </li> */}
          {itemList.map((i, id) => {
            console.log(i);
            return <li key={id}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
