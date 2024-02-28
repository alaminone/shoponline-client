import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Darkmood = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDarkModeEnabled);
    }, []);
  
    useEffect(() => {
      // Apply or remove dark mode styles based on the state
      const htmlElement = document.documentElement;
  
      if (darkMode) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
  
      // Save the user's preference in localStorage
      localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <button
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full flex items-center"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun className="mr-2 text-2xl" /> : <FiMoon className="mr-2 text-2xl " />}
        {/* {darkMode ? 'Light' : 'Dark'} */}
      </button>
    );
  };

export default Darkmood;