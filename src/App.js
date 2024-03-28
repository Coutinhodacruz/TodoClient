import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addToDo, getAllTodo, updateTodo, deleteToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdated, setIsUpdated] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() =>{
    getAllTodo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdated(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>My ToDo App ❤️</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="Add ToDo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div 
          className="add" 
          onClick={isUpdated ?
             () => updateTodo(toDoId, text, setToDo, setText, setIsUpdated) 
            : () => addToDo(text, setText, setToDo)}>
            {isUpdated ? "Updated" : "Add"}
          </div>

        </div>
        
        <div className="list">
          {toDo.map((item) => <Todo 
          key={item._id} 
          text={item.text} 
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)}
          />)}

      

        </div>

      </div>
      
    </div>
  );
}

export default App;
