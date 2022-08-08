import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {   
        return (
        <header>
            <div className='overlay'>
                <h1>Welcome to CatTinder</h1>
                <h3>Premium Version</h3>
                    <p>Are you alone? Are you tired of swiping glasses off the counter with zero satisfaction? Are you looking for a lifetime partner or a good looking feline to spend one of your nine lives (or nights) with? Purr-haps we here at CatTinder can help...Swipe right for (almost) endless paw-sibilities.
                    </p>
                    <NavLink to={`/catindex/`}>
                        <button>HOME</button> 
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={`/about/`}>
                        <button>ABOUT</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={`/catnew/`}>
                        <button>CREATE A PROFILE</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={`/funfacts/`}>
                        <button>FUN FACTS</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={`/contact/`}>
                        <button>CONTACT</button>
                    </NavLink>
            </div>
        </header>
        
        )
    }
}

export default Header
