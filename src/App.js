import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from "./Sidebar"
import Profile from "./Profile"


function App() {
    return (

        <div className = "app" > 
            <div className="app_body">
                <Sidebar />
                <Chat />
            </div>
        </div>

    );
}

export default App;