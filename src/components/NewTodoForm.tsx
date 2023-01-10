import React, { useState } from 'react';
import {NewTodoFormProps} from '../tupes'

/** добавление новой записи */
function NewTodoForm({ value, updateText, handleAction, error }: NewTodoFormProps) {
    return (
        <label>
            <input
                placeholder='new todo'
                value={value}
                onChange={(e) => updateText(e.target.value)}
                // onChange={(e) => handleOnChange(e.target.value)}
            />
            <p>{ error.text }</p>
            <button onClick={handleAction}>Добавить заметку</button>
        </label>
    );
};

export default NewTodoForm;