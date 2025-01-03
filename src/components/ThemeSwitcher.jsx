import React from 'react'

import { useTheme } from '../contexts/ThemeContext'

const ThemeSwitcher = () => {

    const {theme,toggleTheme} = useTheme();

  return (
    <div>
        <button className='p-4 rounded-3xl bg-gray-200 dark:bg-black-800' onClick={toggleTheme}>
            {theme ? 'Switch to Light mode' : 'Switch to dark mode'}
        </button>
    </div>
  )
}

export default ThemeSwitcher