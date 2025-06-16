import React from 'react'
import './Experience.scss'

const Experience = () => {

    return (
        <div className='fulll-data'>
            <div className='Abilities'>

                <h4>My Abilities</h4>
                <h2>My Proficiency </h2>


            </div>
            <div className="twocards">

                <div className="frontend">
                    <h5 id='front'>Frontend <br /> Development</h5>

                    <div className="two-contents-main">

                        <div className="contents-m1">

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>HTML</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>CSS/SCSS</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>javascript</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>

                        </div>


                        <div className="contents-m1">

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>Bootstrap</span></div>
                            <div className='Adv-m'><span id='Adv'>intermediate</span></div>

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>Git</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanc</span></div>

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>React</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>

                        </div>

                    </div>

                </div>



                <div className="backend">
                    <h5 id='front'>BackEnd <br /> Development</h5>

                    <div className="two-contents-main">

                        <div className="contents-m1">

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>Node JS</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>MySQL</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>



                        </div>


                        <div className="contents-m1">

                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>Mongo DB</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>


                            <div className='data-main-exp'><i className="fa fa-check" aria-hidden="true"></i>
                                <span className='data-exp'>Firebase</span></div>
                            <div className='Adv-m'><span id='Adv'>Advanced</span></div>



                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Experience
