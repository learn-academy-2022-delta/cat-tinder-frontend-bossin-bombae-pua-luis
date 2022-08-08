import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
        <>
			<footer className='footer-distributed'>

				{/* <div className='footer-right'>

					<a href="#"><i className='fa fa-facebook'></i></a>
					<a href="#"><i className='fa fa-twitter'></i></a>
					<a href="#"><i className='fa fa-linkedin'></i></a>
					<a href="#"><i className='fa fa-github'></i></a>

				</div> */}

				<div className='footer-left'>

					<p className='footer-links'>
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
					</p>

					<p>Bossin Bombae &copy; Pua & Luis 2022</p>

				</div>

			</footer>
        </>
        )
    }
}

export default Footer