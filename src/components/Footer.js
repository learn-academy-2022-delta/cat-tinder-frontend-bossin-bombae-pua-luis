import React, { Component} from 'react'
class Footer extends Component {
    render() {
        return (
            <>
            <section>Footer Example 3</section>

		<footer className='footer-distributed'>

			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Bossin Bombae &copy; Pua & Luis 2022</p>
			</div>

		</footer>
        </>
        )
    }
}

export default Footer