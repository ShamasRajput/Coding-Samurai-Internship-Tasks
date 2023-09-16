import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = () =>{
  const localvalue = localStorage.getItem("ITEMS")
  if(localvalue == null) return[]

  return JSON.parse(localvalue)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)
