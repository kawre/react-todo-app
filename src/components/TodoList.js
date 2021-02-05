import Todo from "./Todo";
import ControlButtons from "./buttons/ControlButtons";
import ClearButton from "./buttons/ClearButton";

const TodoList = ({ value, setValue, todos, setTodos }) => {
  return (
    <div className={`main-output ${todos.length < 1 ? "hide" : ""}`}>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </div>
      <div className="todo-control">
        <div className="items-left">
          <p className="p-items-left">{todos.length} items left</p>
        </div>
        <div className="controls">
          <ControlButtons todos={todos} value={value} setValue={setValue} />
        </div>
        <div className="clear-completed">
          <ClearButton setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
