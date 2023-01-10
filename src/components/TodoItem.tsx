import { useAppDispatch } from '../hook';
import { changeIsActive, removeItem } from '../store/todoSlice';
import {TodoItemProps} from "../tupes";

/** отображение одной записи */
function TodoItem({ id, title, completed }: TodoItemProps) {
    const dispatch = useAppDispatch();
    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(changeIsActive(id))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeItem(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;