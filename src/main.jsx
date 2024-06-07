import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginlogoutContextProvider from './context/LoginlogoutContext.jsx.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginlogoutContextProvider>
    <App />
    </LoginlogoutContextProvider>
  </React.StrictMode>
)
