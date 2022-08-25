import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ToggleColorMode from './utils/ToggleColorMode'
import './style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ToggleColorMode>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToggleColorMode>
);