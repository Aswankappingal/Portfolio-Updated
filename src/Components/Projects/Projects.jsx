import React, { useEffect, useState } from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import './Projects.scss'

const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight * 0.4; // Adjust this value as needed

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <div>


      <div className={`servises-main-div ${isVisible ? 'fade-up' : ''}`}>
        {/* //////////////SERVICES/////////////// */}
        <div className="services-main">
          {/* <h1 className='service-heading'>My Awesome <span className='srvs-text'>Services.</span></h1> */}
          <div className="service_main_carrdss">
            <div className="service-main-crd-left">
              <div className="service-card-main">
                <div className="service-card">
                  <div className="service-card-left">
                    <span><HiOutlineDesktopComputer className='pers_icon' /></span>
                  </div>
                  <div className="service-card-right">
                    <h3> UI/UX Designing</h3>
                    <p>5+ Projects </p>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-card-left">
                    <span><HiOutlineDesktopComputer className='pers_icon' /></span>
                  </div>
                  <div className="service-card-right">
                    <h3>Web Development</h3>
                    <p>4+ Projects </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-main-crd-right">
              <h1 className='wht_do_i_help'>What do I <span>help?</span></h1>
              <p>I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.</p>
              <div className="project_completed">
                <h1>9+</h1>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Projects
