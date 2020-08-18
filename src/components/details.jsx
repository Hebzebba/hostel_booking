import React, { useEffect, useState } from 'react';
import { Steps, Button, message } from 'antd';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { booking } from '../store/actions/actions';
import{

	UserOutlined,
	SolutionOutlined,
	LoadingOutlined,
	PushpinOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBRow,
	MDBCol,
	MDBCardHeader,
	MDBContainer,
} from 'mdbreact';
import Payment from './payments';
import Last from './last'

import Header from './header';
import UserForm from './userForm';
import Footer from './footer';

import { fetchDataDetail } from '../store/actions/actions';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';

const { Step } = Steps;

const Details = (props) => {
	const details = useSelector((state) => state.detailsData);
	const dispatch = useDispatch();
	const [current, setCurrent] = useState(0);
	const [photoIndex, setphotoIndex] = useState(0);
	const [isOpen, setisOpen] = useState(false);

	const next = () => {
		const cur = current + 1;
		setCurrent(cur);
	};

	const prev = () => {
		const cur = current - 1;
		setCurrent(cur);
	};

	const renderImages = () => {
		let photoIndex = -1;


		if (imagesrc === null || imagesrc === undefined) {
	console.log("Loading")
		}
		else
			return imagesrc.map((imageSrc) => {
				photoIndex++;
				const privateKey = photoIndex;
				return (
					<MDBCol md='1' className='p-0 mt-2' key={photoIndex}>
						<MDBCard>
							<img
								src={imageSrc}
								alt='Gallery'
								className='img-fluid'
								onClick={() => {
									setphotoIndex(privateKey);
									setisOpen(true);
								}}
							/>
						</MDBCard>
					</MDBCol>
				);
			});
		
	};

	
	

	useEffect(() => {
		dispatch(fetchDataDetail(props.match.params.id));
	}, []);

	let imagesrc = [];

	if (details.hostel_image === undefined || details.hostel_image === undefined) {
		console.log('loading.....');
	} else {
		imagesrc = details.hostel_image;
	}



	const handleBooking = () => { 
		props.dispatch(booking(localStorage.getItem('indexNumber'),props.full_name,props.gender,props.level,props.room_type,props.room_number,props.bed,details.hostel_type,props.phone_number,props.date))

		if (props.bookFail) {
			message.warning('User with that index already exist!')
		}
		else { 

		  message.success('Process complete!')
		}
	}


	const steps = [
		{
			title: 'Profile',
			content: (
				<UserForm
					hostelName={[details.one_in_identity, details.four_in_identity]} 
				/>
			),
			icon: <UserOutlined />,
		},
		{
			title: 'Payment Process',
			content: <Payment merchant_id={ details.merchant_id }/>,
			icon: <SolutionOutlined />,
		},
		{
			title: 'Last',
			content: <Last />,
			icon: <LoadingOutlined />,
		},
	];
	console.log(props.bookFail);
	return (
		<>
			<div className='main-container'>
				<Header />

				<div className='container-fluid '>
					<MDBRow>
						<MDBCol className='col-md-12 col-sm-12'>
							<MDBCard>
								<MDBCardHeader>
									<MDBCardTitle>{details.hostel_name}</MDBCardTitle>
								</MDBCardHeader>
								<MDBCardBody>
									<MDBRow>
										<MDBCol sm='12' md='4'>
											<MDBCard
												className='p-3'
												style={{ width: '18rem', height: '10rem' }}>
												<p>
													<span>
														<PushpinOutlined
															style={{ color: 'red', fontSize: '20px' }}
														/>
													</span>
													Wonderful <b>Location</b>
												</p>

												<p>
													<span>
														<UserOutlined
															style={{ color: 'green', fontSize: '20px' }}
														/>
													</span>
													Marvellous <b>Staff</b>
												</p>
												<p>
													<span>
														<HomeOutlined
															style={{ color: 'blue', fontSize: '20px' }}
														/>
													</span>
													Exellent <b>Cleanliness</b>
												</p>
											</MDBCard>
										</MDBCol>
										<MDBCol sm='12' md='8'>
											<h4>Overview </h4>
											<p>
												With Paris’ international station Gare du Nord just a
												three-minute stroll away, we're well connected at St
												Christopher’s Inn. And with Belushi’s (the bar that has
												Paris' biggest happy hour) just downstairs, our hostel's
												ideal for meeting new people. Hang out with fellow
												travellers and make the most of the special 2-for-1
												drinks deals and 25% off food (yes really!). And when
												you get back from our free city walking tour, you'll be
												thankful for our elevators!
											</p>
											<h4>Location</h4>
											<p>
												We’re located in the bohemian 10th arrondissement – less
												than an hour's train ride from Charles de Gaulle
												airport. Once you’ve made use of our handy online
												check-in (up to 24 hours before arrival), take the Métro
												at Gard de l’Est to Notre Dame and switch lines for the
												Arc de Triomphe and La Tour Eiffel (Eiffel Tower).
												Foodies should check out the Marché Saint-Quentin, just
												a five-minute stroll away. If art's more your thing,
												jump on the Métro for seven stops to see the Mona Lisa
												at the Louvre – she's smaller than you think!
											</p>
										</MDBCol>
									</MDBRow>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBContainer>
							<MDBRow>
								{renderImages()}

								<div>
									{isOpen && (
										<Lightbox
											mainSrc={imagesrc[photoIndex]}
											nextSrc={imagesrc[(photoIndex + 1) % imagesrc.length]}
											prevSrc={
												imagesrc[
													(photoIndex + imagesrc.length - 1) % imagesrc.length
												]
											}
											onCloseRequest={() => setisOpen(false)}
											onMovePrevRequest={() =>
												setphotoIndex(
													(photoIndex + imagesrc.length - 1) % imagesrc.length
												)
											}
											onMoveNextRequest={() =>
												setphotoIndex((photoIndex + 1) % imagesrc.length)
											}
										/>
									)}
								</div>
							</MDBRow>
						</MDBContainer>
					</MDBRow>
				</div>

				<div className='container-fluid pt-3'>
					<div className='row'>
						<div className='col-md-6 col-sm-12'>
							<MDBCard>
								<MDBCardTitle className='m-auto'>
									Make a reservation
								</MDBCardTitle>
								<MDBCardBody style={{ height: '30%' }}>
									<Steps current={current}>
										{steps.map((item) => (
											<Step
												key={item.title}
												title={item.title}
												icon={item.icon}
											/>
										))}
									</Steps>
									<div className='steps-content'>{steps[current].content}</div>
									<div className='steps-action'>
										{current < steps.length - 1 && (
											<Button type='primary' onClick={() => next()}>
												Next
											</Button>
										)}
										{current === steps.length - 1 && (
											<Button
												type='primary'
												onClick={handleBooking }>
												Done
											</Button>
										)}
										{current > 0 && (
											<Button
												style={{ margin: '0 8px' }}
												onClick={() => prev()}>
												Previous
											</Button>
										)}
									</div>
								</MDBCardBody>
							</MDBCard>
						</div>
						<div className='col-md-6 col-sm-12'>
							<MDBCard>
								<MDBCardHeader>
									<MDBCardTitle className='m-auto'>Map Location</MDBCardTitle>
								</MDBCardHeader>
								<MDBCardBody>
									<iframe
										src={details.map_area}
										title='This is a unique title'
										width='100%'
										height='300px'
										frameBorder='0'
										style={{ border: 0 }}
									/>
								</MDBCardBody>
							</MDBCard>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

const mapStateToProps = state => ({
	full_name : state.book.full_name,
	gender: state.book.gender,
	level : state.book.level,
	room_type : state.book.room_type,
	room_number : state.book.room_number,
	bed : state.book.bed,
	phone_number : state.book.phone_number,
	date: state.book.date,
	bookFail:state.book.bookFail,
})

export default connect(mapStateToProps)(Details);
