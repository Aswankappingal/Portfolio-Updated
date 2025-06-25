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
    }, 3500); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);


  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="main-content">
          {/* <Indro scrollToSection={scrollToSection} /> */}
          {/* Add IDs to each section */}
          <section id="home">
            <Indro scrollToSection={scrollToSection} />
          </section>

          <section id="work">
            <Works />


          </section>
          <section id='Experience'>
            <ExperienceE />

          </section>
          <section id="about">
            <Experience />

            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>

        </div>
      )}
    </>
  );
}

export default App;