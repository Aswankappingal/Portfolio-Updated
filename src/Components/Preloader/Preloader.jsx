import React, { useState, useEffect } from 'react';
import './Preloader.scss';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    const loadingStages = [
        { text: 'Initializing...', duration: 500 },
        { text: 'Loading Components...', duration: 800 },
        { text: 'Preparing Experience...', duration: 600 },
        { text: 'Loading Projects...', duration: 700 },
        { text: 'Setting up Portfolio...', duration: 500 },
        { text: 'Almost Ready...', duration: 400 },
        { text: 'Welcome!', duration: 300 }
    ];

    useEffect(() => {
        let currentStage = 0;
        let currentProgress = 0;

        const updateLoader = () => {
            if (currentStage < loadingStages.length) {
                const stage = loadingStages[currentStage];
                setLoadingText(stage.text);

                const progressIncrement = 100 / loadingStages.length;
                const targetProgress = (currentStage + 1) * progressIncrement;

                // Smooth progress animation
                const progressInterval = setInterval(() => {
                    currentProgress += 2;
                    if (currentProgress >= targetProgress) {
                        currentProgress = targetProgress;
                        clearInterval(progressInterval);

                        setTimeout(() => {
                            currentStage++;
                            if (currentStage < loadingStages.length) {
                                updateLoader();
                            }
                        }, stage.duration);
                    }
                    setProgress(currentProgress);
                }, 20);
            }
        };

        // Add initial delay for dramatic effect
        setTimeout(() => {
            updateLoader();
        }, 300);
    }, []);

    return (
        <div className="preloader">
            {/* Animated background particles */}
            <div className="particles">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="preloader-content">
                {/* Main logo/title with glow effect */}
                <div className="logo-container">
                    <h1 className="main-title">Loading</h1>
                    <div className="title-glow">Portfolio</div>
                </div>

                {/* Loading progress container */}
                <div className="progress-container">
                    {/* Progress bar */}
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="progress-bar-shine"></div>
                        </div>
                    </div>

                    {/* Progress info */}
                    <div className="progress-info">
                        <span className="progress-percentage">{Math.round(progress)}%</span>
                        <span className="loading-text">{loadingText}</span>
                    </div>
                </div>

                {/* Rotating loader icon */}
                <div className="spinner-container">
                    <div className="spinner-outer">
                        <div className="spinner-inner"></div>
                    </div>
                </div>

                {/* Loading dots animation */}
                <div className="loading-dots">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="dot"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="grid-overlay"></div>
        </div>
    );
};

export default Preloader;