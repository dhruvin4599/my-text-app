
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

 import {
   BrowserRouter as Router,
   Switch,
   Route
  } 
 from 'react-router-dom';
 

function App() { 
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(Mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");
    // document.title = 'ExtendedItArms - Dark Mode';  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    //  document.title = 'ExtendedItArms - Light Mode';
      }
  }
  return (
    <> 
    {/* <Navbar title="ExtendedItArms" About="About" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="ExtendedItArms" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch> 
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter The Text to Analyze Below" mode={Mode}/>  
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
