import { useState } from "react";
import AppName from "./assets/component/AppName";
import AppTodo from "./assets/component/AddTodo";
import TodoItems from "./assets/component/TodoItems";
import "./app.css";
import WelcomeMessage from "./assets/component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]
  );

  const handleNewItem = (itemName, itemDueDate) =>
  {
    console.log( ` New Item Added: ${itemName} Date: ${itemDueDate}` );
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate},

    ];
     setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name != todoItemName);
    
   setTodoItems(newTodoItems);
  };



  return (
    <center className="todo-container">
      <AppName />
      <AppTodo  onNewItem ={handleNewItem} />
     { todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
