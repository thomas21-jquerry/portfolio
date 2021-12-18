import React from 'react'
import Particles from "react-tsparticles";



export const Contact = () => {
    
    return (
        <div className='Contact' id='#contacts'>
            <form className='contactForm'>
                <input type="text" className="form-control" placeholder="First name" />
                <input type="text" className="form-control" placeholder="Last name" />
                <textarea className="form-control" placeholder='Reason'></textarea>
            </form>
            
        </div>
    )
}
export default Contact;