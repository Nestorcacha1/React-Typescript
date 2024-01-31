import { useState } from "react";
import { Todos } from "./Componets/Todos.tsx";
import { FilterValue, TodoId, TodoTitle, type Todo as TodoType } from "./type";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./Componets/Footer";
import { Header } from "./Componets/Header";

const mockTodos = [
  {
    id: "1",
    title: "Ver directo de midudev en Youtube",
    completed: true,
  },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleComplete = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemove}
        onToggleTodo={handleComplete}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
