import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Routes from './Components/Routes';
import Footer from './Components/Footer';
import './App.css';

const App=()=>{
const [darkTheme, setDarkTheme]=useState(false)

  return(
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App
