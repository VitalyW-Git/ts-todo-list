interface Error {
    isShow: boolean;
    text: string;
}
export type NewTodoFormProps = {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void,
    error: Error,
}

export type TodoItemProps = {
    id: string,
    title: string,
    completed: boolean,
}

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodosState {
    list: Todo[];
}

const initialState: TodosState = {
    list: [],
}

export default initialState