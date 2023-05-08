import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Aula1 from './components/aula1/'
// import Aula2 from './components/aula2/'
// import Aula3 from './components/aula3/'
// import Aula4 from './components/aula4/'
// import Aula5 from './components/aula5/'
import Aula6 from './components/aula6/'

// import './index.css'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Aula1 /> */}
    {/* <Aula2 /> */}
    {/* <Aula3 nome="Carlos" github="andriolisp" /> */}
    {/* <Aula4 nome="Carlos" github="andriolisp" /> */}
    {/* <Aula5 nome="Carlos" github="andriolisp" /> */}
    <Aula6 github="andriolisp" />
  </React.StrictMode>,
)
