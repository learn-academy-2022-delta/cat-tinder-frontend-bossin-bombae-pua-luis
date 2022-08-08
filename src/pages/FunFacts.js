import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class FunFacts extends Component {
    render() {
        return (
            <>
                <h1>Fun Facts About Bombay Cats</h1>
                <div className='funfacts'>
                    <img src= "https://www.rover.com/blog/wp-content/uploads/2019/07/pretty-bombay-cat-960x540.jpg" alt="Bossin Bombae" height="500px" width="300px" className='center'>
                    </img>
                    <ul>
                        <li>1950 America - breeders crossed a Burmese and a black American Shorthair with bright, copper eyes which resulted in the Bombay.</li>
                        <br/>
                        <li>Bombay cats were bred to resemble the black leopard found in India.</li>
                        <br/>
                        <li>These cats love to climb and jump. They should be kept active.
                        </li>
                        <br/>
                        <li>The Bombay sway is a main distinction of their breed. Their walk mimics the Indian black leopard they are meant to resemble.</li>
                    </ul>
                    <br/>
                    <p>Source: <a href= "https://www.hillspet.com/cat-care/cat-breeds/bombay" target="_blank" rel="noreferrer"> Hill's Pet</a>
                    </p>
                </div>
            </>
        )
    }
}

export default FunFacts