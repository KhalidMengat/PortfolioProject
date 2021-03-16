import React from 'react'
import Typed from 'react-typed';

const header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>Web developer</h1>
                <Typed
                    className='typed-text'
                    strings={['Web designer', 'Web developement', 'Frontend developer']}
                    typeSpeed={30}
                    backSpeed={70}
                    loop
                />
                <a href="#" className='btn-about-me'>Contact me</a>
            </div>
        </div>
    )
}

export default header
