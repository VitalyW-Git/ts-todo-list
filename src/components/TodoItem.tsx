import { useAppDispatch } from '../hook';
import { toggleComplete, removeTodo } from '../store/todoSlice';
import {TodoItemProps} from "../tupes";

/** отображение одной записи */
function TodoItem({ id, title, completed }: TodoItemProps) {
    const dispatch = useAppDispatch();
    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;