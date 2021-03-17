import React from 'react'
import Typed from 'react-typed';

const header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>Welcome on my portfolio</h1>
                <Typed
                    className='typed-text'
                    strings={['Web designer', 'Web developer', 'Frontend developer']}
                    typeSpeed={30}
                    backSpeed={70}
                    loop
                />
                <a href="#" className='btn-contact-me'>Contact me</a>
            </div>
        </div>
    )
}

export default header
