import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }

  },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handletheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
   
  }


  return (

   <div className='h-screen bg-blue-200 dark:bg-black flex justify-center items-center'>
    <ThemeProvider>
      {/* <button className='bg-red-300 p-4 rounded-3xl' onClick={handletheme}>Dark Mode</button> */}
      <ThemeSwitcher />

      
    </ThemeProvider>
   </div>
  )
}

export default App
