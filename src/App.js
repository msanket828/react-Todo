import React, { useState, Fragment } from 'react'
import Li from './component/Li'
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
  const [inputList, setInputList] = useState("");

  const handleChange = (e) => {
    setInputList(e.target.value);
  }



  const addData = (e) => {
    e.preventDefault();
      (inputList == "") ? 
      alert("please fill the task before add") :
      (setItems((olditems) => {
        return [...olditems, inputList];
      }))
    setInputList("");

  }

  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((item, index) => {
        return index != id
      })
    })
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Todo List</h1>
        <form>
          <div class="form-group">
            <input type="text" onChange={handleChange} value={inputList} />
          </div>
          <div class="form-group">
            <input type="submit" value="add todo" onClick={addData} />
          </div>
        </form>
        <br />
        <ol className="todo_ul">
          {
            items.map((items, index) =>
              <Li
                key={index}
                id={index}
                delete={deleteItems}
                text={items}
              />)
          }
        </ol>

      </div>
    </div>
  )
}

export default App