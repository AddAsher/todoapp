import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {Button, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import "./App.css";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updateTodoArr = [...allTodos];
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updateTodoArr));
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value };
    });
  };

  const handleUpdateTodo = () => {
    let newToDo = [...allTodos];
    newToDo[currentEdit] = currentEditedItem;
    setTodos(newToDo);
    setCurrentEdit("");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>My Todos</h1>

        <div className="todo-wrapper">
          <div className="todo-input">
            <div className = "todo-input-item">
              <TextField
                label="Title"
                // type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="What's the task title?"
              />
            </div>
            <div className="todo-input-item">
              <TextField
                label = "Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="What's the task description?"
              />
            </div>
            <div className="todo-input-item">
              <Button
                type="button"
                onClick={handleAddTodo}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </div>

          <div className="btn-area">
            <Button
              type = "button"
              className={`secondaryBtn ${isCompleteScreen === false ? "active" : ""}`}
              onClick={() => setIsCompleteScreen(false)}
              variant = "outlined"
            >
              Todos
            </Button>
            <Button
              type = "button"
              className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
              onClick={() => setIsCompleteScreen(true)}
              variant = "outlined"
            >
              Completed
            </Button>
          </div>

          <div className="todo-list">
            {isCompleteScreen === false &&
              allTodos.map((item, index) => {
                if (currentEdit === index) {
                  return (
                    <div className="edit__wrapper" key={index}>
                      <input
                        placeholder="Updated Title"
                        onChange={(e) => handleUpdateTitle(e.target.value)}
                        value={currentEditedItem.title}
                      />
                      <TextField
                        placeholder="Updated Title"
                        rows={4}
                        onChange={(e) =>
                          handleUpdateDescription(e.target.value)
                        }
                        value={currentEditedItem.description}
                      />
                      <Button
                        type="button"
                        onClick={handleUpdateTodo}
                        className="primaryBtn"
                        variant = "contained"
                      >
                        Update
                      </Button>
                    </div>
                  );
                }
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div>
                      <DeleteIcon
                        className="icon"
                        onClick={() => handleDeleteTodo(index)}
                        title="Delete?"
                      />
                      <CheckIcon
                        className="check-icon"
                        onClick={() => handleComplete(index)}
                        title="Complete?"
                      />
                      <EditIcon
                        className="check-icon"
                        onClick={() => handleEdit(index, item)}
                        title="Edit?"
                      />
                    </div>
                  </div>
                );
              })}

            {isCompleteScreen === true &&
              completedTodos.map((item, index) => {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <p>
                        <smnall>Completed on: {item.completedOn}</smnall>
                      </p>
                    </div>

                    <div>
                      <DeleteIcon
                        className="icon"
                        onClick={() => handleDeleteCompletedTodo(index)}
                        title="Delete?"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
