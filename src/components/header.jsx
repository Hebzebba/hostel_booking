import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {fetchData } from '../store/actions/actions';

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
	MDBDropdownItem,
	MDBDropdownMenu,
	MDBDropdown,
	MDBDropdownToggle
} from 'mdbreact';

class Header extends Component {

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
		console.log(this.props.list)
		if (localStorage.getItem('token') === null) {
			return <Redirect to='/' />;
		}
		return (
			<MDBNavbar  color="default" dark expand='md' className="header">
				<MDBNavbarBrand>
					<img src="images/logo.png" width="10%" className="pr-2" alt=""/>
					<strong className='white-text'>KTU HOSTEL RESERVATION</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						<MDBNavItem>
							<MDBNavLink to='/home' className="header-link">Home</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
					<MDBDropdown>
								
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Hostel</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
				{this.props.links.map((data, key) => ( 
					<MDBDropdownItem href={`/rooms/${data}`} key={key}>{data}</MDBDropdownItem>))
				}
                </MDBDropdownMenu>
              </MDBDropdown>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to='/map' className="header-link">Map</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to='/contact' className="header-link">Contact</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to='/about' className="header-link">About Us</MDBNavLink>
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
const mapStateToprops = (state) => ({
	list : state.data,
});
export default connect(mapStateToprops)(Header);
