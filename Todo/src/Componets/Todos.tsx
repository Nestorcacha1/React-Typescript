import { type Todo as TodoType, ListOfTodos, TodoId } from "../type";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleTodo: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
}
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleTodo={onToggleTodo}
            />
          </li>
        );
      })}
    </ul>
  );
};
