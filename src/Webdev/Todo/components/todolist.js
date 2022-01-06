import './todolist.css';

import Todos from './todos.js';


const TodoList = ({ todo, setTodos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todo.map((todos) => (
                    <Todos
                     setTodos={setTodos} 
                     todos={todos}
                     todo={todo} 
                     key={todos.id} 
                     text={todos.text}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;