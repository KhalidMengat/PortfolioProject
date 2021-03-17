import React from 'react'
import myself from '../becode.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5"></div>
                    <img className='profile-img' src={myself} alt="myself..."/>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='me'>About me</h1>
                    <p>Hello! I'm khalid. I'm 23 and I'm a junior web developer. I create responsive websites that are displayed on all devices desktops and smartphone. Technologies I use is HTML5, CSS3, Javascript, ReactJs, NextJS, NodeJS and some frameworks like bootstrap, bulma, chakra UI. I also use figma or adobe illustrator for websites mockups. For the moments, I'm learning wordpress.</p>

                </div>
            </div>

        </div>
    )
}

export default AboutMe

