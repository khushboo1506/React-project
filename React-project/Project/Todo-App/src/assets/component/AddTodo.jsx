import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AppTodo({onNewItem}) {
  const [todoName,setTodoName] = useState("");
   const [dueDate,setDueDate] = useState("");

   const handleNameChange = (event) => {
    setTodoName(event.target.value);
   };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
   };
  
   const handleAddButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");

   };


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="enter the Todo here" 
          value= {todoName}
          onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" placeholder="enter the date" 
          value={dueDate}
          onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
            >
              <BiMessageAdd/>
          
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
