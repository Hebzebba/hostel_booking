import React, { Component } from 'react';
import CarouselPage from './carousel';
import NavigationBar from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { studentLogin } from '../store/actions/actions';
import { Redirect } from 'react-router-dom';

import {
	HomeOutlined,
	CustomerServiceOutlined,
	MessageOutlined,
} from '@ant-design/icons';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		if (localStorage.getItem('token') === null) {
			return <Redirect to='/' />;
		}
		return (
			<div className='home-container'>
				<NavigationBar />

				<CarouselPage />
				<div className='container-fluid info'>
					<div className='row d-flex justify-content-center'>
						<div className='col-sm-12 col-md-12 pt-5'>
							<center>
								<h3>HERE TO HELP YOU MEET THE WORLD</h3>
								<p style={{ width: '10rem' }}>
									Stay in the heart of the action and discover a world beyond
									the tourist brochure
								</p>
							</center>
						</div>

						<div className='col-md-4' style={{ height: 'auto' }}>
							<center>
								<HomeOutlined style={{ fontSize: 100, color: 'white' }} />
								<h4>Hostels you'll love</h4>
								<p style={{ width: '10rem' }}>
									13 Million reviews from our community of travelers.
								</p>
							</center>
						</div>
						<div className='col-md-4' style={{ height: 'auto' }}>
							<center>
								<CustomerServiceOutlined
									style={{ fontSize: 100, color: 'white' }}
								/>

								<h4>24/7 Customer service</h4>
								<p style={{ width: '10rem' }}>
									Available in 19 languages. Helping you meet the world.
								</p>
							</center>
						</div>
						<div className='col-md-4' style={{ height: 'auto' }}>
							<center>
								<MessageOutlined style={{ fontSize: 100, color: 'white' }} />
								<h4>Instant Confirmation</h4>
								<p style={{ width: '10rem' }}>
									Your booking is guaranteed and we don't charge any booking
									fees.
								</p>
							</center>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToprops = (state) => ({});

export default connect(mapStateToprops, { studentLogin })(Home);
