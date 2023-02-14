
import './App.css';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const {user,setLoginUser}=useState({})

  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Registerpage />}></Route>
          <Route path="/home" element={<Homepage  />}></Route>
          <Route path="/login" element={<Loginpage setLoginUser={setLoginUser}/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;









