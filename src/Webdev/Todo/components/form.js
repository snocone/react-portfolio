import './form.css';
// import TodoList from './todolist';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { 
                text: inputText,
                completed: false, 
                id: Math.random() * 1000 
            },
        ]);
        setInputText('');
    }

    return (
        <form style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type='text'
                placeHolder='Do good'
                className='todo-input'
            />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                +
            </button>
            {/* <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div> */}
        </form>

    );
}

export default Form;