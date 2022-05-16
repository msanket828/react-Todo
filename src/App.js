import React, { useState } from "react";
import Li from "./component/Li";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Walk the dog",
    },
    {
      id: 2,
      title: "Finish Homework",
    },
  ]);
  const [inputList, setInputList] = useState("");
  const [updateItemId, setUpdateItemId] = useState("");

  const handleChange = (e) => {
    setInputList(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    if (!updateItemId) {
      const enteredTodo = {
        id: Math.random(),
        title: inputList,
      };
      inputList === ""
        ? alert("please fill the task before add")
        : setItems((olditems) => {
            return [...olditems, enteredTodo];
          });
    } else {
      const updatedTodo = {
        id: updateItemId,
        title: inputList,
      };

      let newTodo = [...items];
      let findUpdateIndex = newTodo.findIndex(
        (item) => item.id == updateItemId
      );
      newTodo[findUpdateIndex] = updatedTodo;
      setItems(newTodo);
      setUpdateItemId("");
    }
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((olditems) => {
      return olditems.filter((item, index) => {
        return item.id !== id;
      });
    });
  };

  const updateItem = (data) => {
    setInputList(data.title);
    setUpdateItemId(data.id);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Todo List</h1>
        <form onSubmit={addData}>
          <div className="form-group">
            <input type="text" onChange={handleChange} value={inputList} />
          </div>
          {updateItemId ? (
            <div className="form-group">
              <input type="submit" value="Updated Todo" />
            </div>
          ) : (
            <div className="form-group">
              <input type="submit" value="Add todo" />
            </div>
          )}
        </form>
        <br />
        <ol className="todo_ul">
          {items.map((item, index) => (
            <Li
              key={item.id}
              id={item.id}
              index={index}
              title={item.title}
              delete={deleteItem}
              text={items}
              update={updateItem}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
