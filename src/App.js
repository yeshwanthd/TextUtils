import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode("dark")
      showAlert("Dark mode has been enabled", "Success: ")
    }
    else{
      setMode('light')
      showAlert("Light mode has been enabled", "Success: ")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" showAlert = {showAlert} mode={mode}   />}/>
        </Routes> */}
        {<TextForm heading="Enter the text to analyse" showAlert = {showAlert} mode={mode}   />}
        
        {/* <About/> */}
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App; 
