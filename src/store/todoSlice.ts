import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TodosState} from '../tupes'

const initialState: TodosState = {
    list: [],
    staticList: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>) {
            /**
             * если список отфильтрован,
             * пропускаем через новое заполнение
             * что-бы не потерять ранее заполненные данные
             * */
            if (state.staticList.length >= state.list.length) {
                const difference = state.staticList.length - state.list.length
                if (difference >= 1) {
                    state.list = []
                    state.list = state.staticList
                    state.list.push({
                        id: new Date().toISOString(),
                        title: action.payload,
                        completed: false,
                    });
                    return
                }
            }
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
            state.staticList = state.list
        },
        changeIsActive(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
            state.staticList = state.list
        },
        removeItem(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
            state.staticList = state.list
        },
        filterTodoList(state, action: PayloadAction<boolean|null>) {
            state.list = []
            if (action.payload === null) {
                state.list = state.staticList
                return
            }
            state.staticList.forEach(item => {
                if (item.completed === action.payload) {
                    state.list.push(item)
                }
            });
        },
    },
});

export const { addItem, changeIsActive, removeItem, filterTodoList } = todoSlice.actions;

export default todoSlice.reducer;