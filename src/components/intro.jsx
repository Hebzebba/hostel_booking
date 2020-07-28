import React from 'react';
import { connect } from 'react-redux';
import { studentLogin } from '../store/actions/actions';
import { Redirect } from 'react-router-dom';
import {
	MDBMask,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn,
	MDBView,
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBAnimation,
} from 'mdbreact';

class ClassicFormPage extends React.Component {
	state = {
		collapseID: '',
		indexNumber: '',
		password: '',
	};

	handleIndexChange = (e) => {
		return this.setState({ indexNumber: e.target.value });
	};

	handlePasswordChange = (e) => {
		return this.setState({ password: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(
			studentLogin(this.state.indexNumber, this.state.password)
		);
	};

	render() {
		if (localStorage.getItem('token') != null) {
			return <Redirect to='/home' />;
		}
		return (
			<div id='classicformpage'>
				<MDBView>
					<MDBMask className='d-flex justify-content-center align-items-center gradient' />
					<MDBContainer
						style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
						className='mt-5  d-flex justify-content-center align-items-center'>
						<MDBRow>
							<MDBAnimation
								type='fadeInLeft'
								delay='.3s'
								className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
								<h1 className='h1-responsive font-weight-bold text-light'>
									KTU HOSTEL RESERVATION SYSTEM
								</h1>
								<hr className='hr-light' />
								<h6 className='mb-4 text-light'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
									repellendus quasi fuga nesciunt dolorum nulla magnam veniam
									sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
									quisquam iste, maiores. Nulla.
								</h6>
							</MDBAnimation>

							<MDBCol md='6' xl='5' className='mb-4'>
								<MDBAnimation type='fadeInRight' delay='.3s'>
									<form onSubmit={this.handleSubmit}>
										<MDBCard id='classic-card'>
											<MDBCardBody className='white-text'>
												<h3 className='text-center text-light'>
													<MDBIcon icon='user' /> Login
												</h3>
												<hr className='hr-light' />
												<MDBInput
													className='white-text'
													iconClass='white-text'
													label='Index Number'
													icon='user'
													value={this.state.indexNumber}
													onChange={this.handleIndexChange}
												/>

												<MDBInput
													className='white-text'
													iconClass='white-text'
													label='Your password'
													icon='lock'
													type='password'
													value={this.state.password}
													onChange={this.handlePasswordChange}
												/>
												<div className='text-center mt-4 black-text'>
													<MDBBtn
														color='indigo'
														className='text-light'
														type='submit'>
														Login
													</MDBBtn>
												</div>
											</MDBCardBody>
										</MDBCard>
									</form>
								</MDBAnimation>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</MDBView>
			</div>
		);
	}
}
const mapStateToprops = (state) => ({
	token: state.studentLogin.token.token,
});
export default connect(mapStateToprops)(ClassicFormPage);
