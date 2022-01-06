import './todos.css';

const Todos = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todo.filter(el => el.id !== todos.id));
        console.log(todo);
    };

    const completeHandler = () => {
        setTodos(todo.map((item) => {
            if(item.id === todos.id) {
                return {
                    ...item, completed: !item.completed
                };
            };
            return item;
        }))
    }

    return (
        <div className='todos'>
            <li className={`todo-item ${todos.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button 
             onClick={completeHandler} className='button'
            >
                Done
            </button>
            <button onClick={deleteHandler} className='button-delete'>Delete</button>
        </div>
    );
}

export default Todos;