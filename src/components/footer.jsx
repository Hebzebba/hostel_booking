import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<MDBFooter color='blue' className='font-small pt-4 mt-4'>
				<MDBContainer fluid className='text-center text-md-left'>
					<MDBRow>
						<MDBCol md='6'>
							<h5 className='title'>Footer Content</h5>
							<p>
								Here you can use rows and columns here to organize your footer
								content.
							</p>
						</MDBCol>
						<MDBCol md='6'>
							<h5 className='title'>Links</h5>
							<ul>
								<li className='list-unstyled'>
									<Link to='/home'>Home</Link>
								</li>
								<li className='list-unstyled'>
									<Link to='/rooms/all'>Hostels</Link>
								</li>
								<li className='list-unstyled'>
									<Link to='/contact'>Contact Us</Link>
								</li>
								<li className='list-unstyled'>
									<Link to='/about'>About</Link>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div className='footer-copyright text-center py-3'>
					<MDBContainer fluid>
						&copy; {new Date().getFullYear()} Copyright || All right reserved
					</MDBContainer>
				</div>
			</MDBFooter>
		);
	}
}

export default Footer;
