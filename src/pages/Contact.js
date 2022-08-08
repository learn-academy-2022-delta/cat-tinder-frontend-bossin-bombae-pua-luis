import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <>
            <h1>Meet the Creators!</h1>
                <div className='portfolios'>
                    <br/>
                    <p className='creators'>Luis Ramos</p>
                        <a href="https://first-portfolio-aa41a2.webflow.io/" target="_blank" rel="noreferrer">Portfolio</a>
                    <br/>
                        <a href="https://www.linkedin.com/in/luis-ramos1/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <br/>
                    <br/>
                    <p className='creators'>Puana'ala Amano</p>
                        <a href="https://amanopk.carrd.co/" target="_blank" rel="noreferrer">Portfolio</a>
                    <br/>
                        <a href="https://www.linkedin.com/in/pkamano/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </>
        )
    }
}

export default Contact