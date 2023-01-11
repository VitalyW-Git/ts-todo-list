import {useState} from 'react';
import {useAppDispatch, useAppSelector} from './hook';
import {addItem, filterTodoList} from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import {Todo} from './tupes';

import './app.css';

interface Error {
    isShow: boolean;
    text: string;
}

function App() {
    /** счетчик по задачам (create/done task/not done task) start */
    const todos = useAppSelector(state => state.todos.staticList);
    const createdTasksCount = todos.length
    const doneTasksCount = todos.filter(
        (item: Todo) => item.completed === true
    ).length;
    const notDoneTaskCount = createdTasksCount - doneTasksCount;
    /** счетчик по задачам (create/done task/not done task) end */

    const dispatch = useAppDispatch();

    /** при заполнения input */
    const [text, setText] = useState<string>('');
    /** следим за ошибками */
    const [isError, setIsError] = useState<Error>({
        isShow: false,
        text: '',
    });

    const watchInput = (value: string) => {
        setIsError({
            isShow: value.length > 9,
            text: value.length > 9 ? 'Вводимый текст не должен превышать 10 символов' : '',
        });
        setText(value.slice(0, 10))
    }

    const handleAction = () => {
        /** перенести для отслеживания */
        if (!isError.isShow && text.trim().length) {
            dispatch(addItem(text));
            setText('');
        }
    }

    const filterLists = (data: boolean | null) => {
        dispatch(filterTodoList(data));
    }

    return (
        <div className='app'>
            <div className="container">
                <div>Текст не должно превышать 10 символов.</div>
                <div className="btn-filter">
                    <button onClick={() => filterLists(null)}>All</button>
                    <button onClick={() => filterLists(true)}>Completed</button>
                    <button onClick={() => filterLists(false)}>Active</button>
                </div>
                <div className="inform">
                    <span>Created Tasks: {createdTasksCount}</span>
                    <span>Done Tasks: {doneTasksCount} / {notDoneTaskCount} :Not Done Tasks</span>
                </div>
                <NewTodoForm
                    value={text}
                    updateText={watchInput}
                    handleAction={handleAction}
                    error={isError}
                />
                <TodoList/>
            </div>
        </div>
    );
}

export default App;