import React, { useEffect, useState } from 'react'
import './Works.scss'

const Works = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = window.innerHeight * 0.7; // Adjust this value as needed

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

            <div className='projects-main-div' id='projects'>
                <div className={`scroll ${isVisible ? 'fade-up' : ''}`}>
                    <div className="heading">
                        <h1>My Latest <span>Projects</span></h1>
                    </div>
                    <div className="projects_main">
                        <div className={`project-items_one ${isVisible ? 'fade-up' : ''}`}><a href='https://github.com/Aswankappingal/Watch_React.git'><img src="/Screenshot (67).png" alt="" /></a></div>
                        <div className={`project-items_two ${isVisible ? 'fade-up' : ''}`}><a href='https://github.com/Aswankappingal/React_project_college.git'><img src="/Project 2.png" alt="" /></a></div>
                        <div className={`project-items_three ${isVisible ? 'fade-up' : ''}`}><a href='https://github.com/Aswankappingal/Portfolio.git'><img src="/Project 33.png" alt="" /></a></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Works
