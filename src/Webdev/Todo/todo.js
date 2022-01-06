import React, { useState } from 'react';

import './todo.css';

import Form from './components/form';
import TodoList from './components/todolist';

function Todo() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div className='todo'>
            <header>
                <h1 className='todo-title'>The Daily</h1>
            </header>
            <Form 
                inputText={inputText} 
                todos={todos} 
                setTodos={setTodos} 
                setInputText={setInputText} 
            />
            <TodoList setTodos={setTodos} todo={todos} />
        </div>
    );
}

export default Todo;