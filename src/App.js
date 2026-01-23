import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import "./App.css";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What's the task description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false ? "active" : ""}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todos
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <div>
              <h3>Task 1</h3>
              <text>Description</text>
            </div>

            <div>
              <AiOutlineDelete className="icon" title="Delete?" />
              <AiOutlineCheck className="check-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
