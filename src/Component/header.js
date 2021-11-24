import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                {/* <h1>Hello</h1> */}
                <Typed
                    className="typed-text"
                    strings = {["Back-End Developement","Front-End","Blockchain Development","Devops","Product Design"]}
                    typeSpeed={40}
                />

            </div>
            
        </div>
    )
}

export default Header
