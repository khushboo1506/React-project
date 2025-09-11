import AppItem from "./AppItem";

function TodoItems ({ todoItems , onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <AppItem 
          key={index} 
          todoName={item.name} 
          todoDate={item.dueDate} 
          onDeleteClick = {onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;
