import { TodoId, type Todo as TodosType } from "../type";
interface Props extends TodosType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleTodo: ({
    id,
    completed,
  }: Pick<TodosType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleTodo,
}) => {
  return (
    <div className="view">
      <input
        key={id}
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onToggleTodo({
            id,
            completed: event.target.checked,
          });
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};
