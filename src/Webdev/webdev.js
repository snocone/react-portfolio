import './webdev.css';

import Clock from './Clock/clock';
import Weather from './Weather/weather';
import Todo from './Todo/todo';

function webdev() {
    return(
        <div className='apps'>
            <div>
                <Clock />
            </div>
            <div>
                <Weather />
            </div>
            <div>
                <Todo />
            </div>
            {/* <ul className="menu">
                <button onClick='/home' className='btn-item'>Home</button>
                <button onClick='/resume' className='btn-item'>Resume</button>
                <a href='/webdev' className='menu-item'>Web Dev</a>
                <a href='/education' className='menu-item'>Education</a>
                <p className='menu-item'>Animation</p>
                <p className='menu-item'>Contact</p>
            </ul> */}
        </div>
    )
}

export default webdev;