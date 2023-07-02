import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './components/Routes.jsx'
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
