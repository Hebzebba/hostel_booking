import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBBtn,
	MDBIcon,
} from 'mdbreact';

class NavigationBar extends Component {
	state = {
		isOpen: false,
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	};

	render() {
		if (localStorage.getItem('token') === null) {
			return <Redirect to='/' />;
		}
		return (
			<MDBNavbar color='default-color' dark expand='md'>
				<MDBNavbarBrand>
					<strong className='white-text'>KTU HOSTEL RESERVATION</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						<MDBNavItem active>
							<MDBNavLink to='/home'>Home</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to='/rooms'>Hostels</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
					<MDBNavbarNav right>
						<MDBNavItem>
							<form>
								<span>
									Welcome{' '}
									<b className='text-light'>{localStorage.getItem('user')}</b>
								</span>
								<MDBBtn color='danger' onClick={this.logout} type='submit'>
									Logout
								</MDBBtn>
								<MDBIcon icon='user' className='text-light' />
							</form>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavigationBar;
