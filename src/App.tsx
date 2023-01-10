import { useState } from 'react';
import { useAppDispatch } from './hook';

import { addTodo } from './store/todoSlice';
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
    const [text, setText] = useState('');
    /** следим за ошибками */
    const [isError, setIsError] = useState<Error>({
        isShow: false,
        text: '',
    });

    const handleAction = () => {
        console.log(text)
        /** перенести для отслеживания */
        setIsError({
            isShow: text.length > 10,
            text: text.length > 10 ? 'Вводимый текст не должен превышать 10 символов' : '',
        });
        if (!isError.isShow && text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <div className='App'>
            {text}
            <div>Текст не должно превышать 10 символов.</div>
            <NewTodoForm
                value={text}
                updateText={setText}
                handleAction={handleAction}
                error={isError}
            />
            <TodoList />
        </div>
    );
}

export default App;