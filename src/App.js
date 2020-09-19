import React from 'react';
import './App.css';
//import Clock from './components/Clock/Clock'
import Nav from './components/Navigation/nav'
import Header from './components/Weather/Header';
import Dashboard from './components/Weather/Dashboard'
function App() {
  return (
    <div className="App">
    <Header title='Weather'/>
    <div className="mt-lg-5">
            <div className="col-lg-6 p-0 mx-auto">
                <Dashboard />
            </div>   
  
    </div>
    </div>
  );
}

export default App;
