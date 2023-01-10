import { useState } from 'react';
import { useAppDispatch } from './hook';
import {addItem, filterTodoList} from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';

interface Error {
    isShow: boolean;
    text: string;
}

function App() {
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

    const filterLists = (data: boolean|null) => {
        dispatch(filterTodoList(data));
    }

    return (
        <div className='App'>
            <div>Текст не должно превышать 10 символов.</div>
            <div className="btn-filter">
                <button onClick={() => filterLists(null)}>All</button>
                <button onClick={() => filterLists(true)}>Completed</button>
                <button onClick={() => filterLists(false)}>Active</button>

            </div>
            <NewTodoForm
                value={text}
                updateText={watchInput}
                handleAction={handleAction}
                error={isError}
            />
            <TodoList />
        </div>
    );
}

export default App;