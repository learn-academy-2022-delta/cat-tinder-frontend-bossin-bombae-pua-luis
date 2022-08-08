import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <>
            <h1>About the 'Boss'</h1>
                <div className='center'>
                    <img src= "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-07/black-cat-halloween-mc-220713-02-b10ec0.jpg" alt="Bossin Bombae" height="500px" width="500px" className='center'>
                    </img>
                </div>
            <br/>
                <p style={{textAlign: 'center', fontSize: 20}}> Established in 2022, CatTinder is the 3rd most downloaded Essential Dating App on iTunes. When asked, 'How did you come up with CatTinder?', founder Bossin Bombae responded, "the idea came from baskin' in the sun, realizing that I would rather be baskin' with someone else's son". Bossin Bombae was born at the beginning of a global pandemic in the skreets of LA. Realizing that catnip and love were both hard to find during these unprecedented times, she decided to use "love" to get food. 
            <br/>
                Yours Truly, Bossin Bombae</p>
            </>
        )
    }
}

export default About