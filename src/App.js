import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Resume from './resume/resume';
import Home from './home/home';
import Webdev from './Webdev/webdev';
import Edu from './education/edu';
import Contact from './contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="menu">
          <a href='/home' className='menu-item'>Home</a>
          <a href='/resume' className='menu-item'>Resume</a>
          <a href='/webdev' className='menu-item'>Web Dev</a>
          <a href='/contact' className='menu-item'>Contact</a>
        </ul>
        <h1>Chris Stephens</h1>
        <p>
          Web Developer - Educator - Animator
        </p>
      </header>

      <Router>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path='/webdev'>
          <Webdev />
        </Route>
        <Route exact path='/education'>
          <Edu />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
