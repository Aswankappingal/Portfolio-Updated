// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import ExperienceE from './Components/EarnedExp/ExperienceE';
import Experience from './Components/Experience/Experience';
import Indro from './Components/Indro/Indro';
import Projects from './Components/Projects/Projects';
import Works from './Components/Works/Works';
import Preloader from './Components/Preloader/Preloader';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="main-content">
          <Indro />
          <Projects />
          <Experience />
          <Works />
          <ExperienceE />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;