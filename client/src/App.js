import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import TinyHomeChecklist from './components/TinyHomeChecklist'
import UploadForm from './components/UploadForm';
function App() {
  return (
    
    <div className="App">
      <h1>Capstone Project</h1>
      <TinyHomeChecklist />
    </div>
  );
}

export default App;
