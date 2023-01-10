import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';

/** список со всеми добавленными заметками */
function TodoList() {
    const todos = useAppSelector(state => state.todos.list);
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                />
            ))}
        </ul>
    );
};

export default TodoList;