import { useAppDispatch } from '../hook';
import { changeIsActive, removeItem } from '../store/todoSlice';
import {TodoItemProps} from "../tupes";
import classNames from 'classnames'

/** отображение одной записи */
function TodoItem({ id, title, completed }: TodoItemProps) {
    const dispatch = useAppDispatch();
    const taskClass = classNames({
        'create-task': true,
        'active': completed,
    });
    return (
        <li>
            <span className={taskClass}
                  onClick={() => dispatch(changeIsActive(id))}
            >
                {title}
            </span>
            <span onClick={() => dispatch(removeItem(id))}>&times;</span>
        </li>
    );
}

export default TodoItem;