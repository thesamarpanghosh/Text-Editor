import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#120c3b';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Editor" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform heading="Text Editor - Edit Your Texts Online" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About about="About Text Editor" mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
