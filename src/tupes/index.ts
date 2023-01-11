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

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodosState {
    list: Todo[];
    staticList: Todo[];
}