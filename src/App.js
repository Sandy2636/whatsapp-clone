import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}] = useStateValue();
  return (
    <div className="app">
      <div className="phone">
        <h1 className="phone-text">Only For DeskTop</h1>
        <img className="phone-image" src="https://i.pinimg.com/736x/20/90/c2/2090c234361224f432a40093f7d29ce1.jpg" alt=""/>
      </div>
        {!user ? (
          <div className="app_login"><Login/></div>
        ):(
          <div className="app_body">
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
        
    </div>
    
  );
  
}

export default App;
