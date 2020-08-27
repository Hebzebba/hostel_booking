import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom';
import SpinnerPage from './spinner';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBCardHeader,
} from 'mdbreact';

import { fetchData } from '../store/actions/actions';

const Rooms = (props) => {

	const [inputValuePrice, SetInputvaluePrice] = useState(0);
	const [inputValueDistance, SetInputvalueDistance] = useState(0);


const onChangePrice = value => {
	SetInputvaluePrice(value)	
	};
	
	const onChangeDistance = value => {
	SetInputvalueDistance(value)	
};

	const getUnique = (items, value) => {
		return [...new Set(items.map((item) => item[value]))];
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, []);
	const list = useSelector((state) => state.data);
	const { datalist, loading, error } = list;

	let types = getUnique(datalist, 'hostel_type');
	types = ['all', ...types];

	let Price = getUnique(datalist, 'price');
	Price = ['all', ...Price];

	let Distance = getUnique(datalist, 'distance');
	Distance = ['all', ...Distance];

	const [hostelType, setHostelType] = useState('all');
	const [price, setPrice] = useState('all');
	const [distance, setDistance] = useState('all');

	const hostel_Type = (e) => {
		return setHostelType(e.target.value);
	};

	const pri = (e) => {
		return setPrice(e.target.value);
	};

	const dis = (e) => {
		return setDistance(e.target.value);
	};

	let filterRooms = (data) => (
		<MDBCol md='4' className='mt-2' key={data._id}>
			<MDBCard>
				<MDBCardImage className='img-fluid' src={data.hostel_image[0]} waves />
				<MDBCardBody>
					<MDBCardHeader>
						<MDBCardTitle>{data.hostel_name} Hostel</MDBCardTitle>
					</MDBCardHeader>
					<MDBCardBody>
						<p className='text-info'>
							Price : <b>{data.price}</b>
						</p>
						<p className='text-info'>
							Type : <b>{data.hostel_type}</b>
						</p>
					</MDBCardBody>
					<MDBBtn gradient='blue' href={`/details/${data._id}`}>
						Read more
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);


	const filtered = datalist.map((data) => {

		if (props.match.params.type === data.hostel_type) {
			return filterRooms(data);
		}
		if (props.match.params.type === "all" && Number(inputValueDistance) == 0 && price === 'all' ) {
			return filterRooms(data);
		}

		if (Number(price) === data.price && (props.match.params.type === 'all' ||props.match.params.type === 'Mixed' ||props.match.params.type === 'Females'||props.match.params.type === 'Males')) {
			return filterRooms(data);
		}

		
		// if (Number(inputValueDistance) >= 1 && Number(inputValueDistance) <= 200) {
		// 	console.log(data)
		// 	return filterRooms(data);
		// }

		if ((Number(inputValueDistance) >= 1 && Number(inputValueDistance) <= data.distance)  || (Number(price) === data.price && (props.match.params.type === 'all' || props.match.params.type === 'Mixed' ||props.match.params.type === 'Females'||props.match.params.type === 'Males'))) {
			console.log(data)
			return filterRooms(data);
		}
		
		
		// distance
	});

	const spin = () => {
		if (loading || error) {
			return (
				<div className='d-flex justify-content-lg-around'>
					{' '}
					<SpinnerPage />
				</div>
			);
		}
	};

	if (localStorage.getItem('token') === null) {
		return <Redirect to='/' />;
	}
	return (
		<>
			<div className='main-container'>
				<Header links={types}/>
				<div className='container-fluid'>
					<MDBRow>
						<MDBCol style={{ width: '100%' }}>
							<MDBCard reverse>
								<MDBCardImage
									cascade
									style={{ width: '100%', height: '20rem' }}
									src='/images/bed3.jpg'
									className='img-fluid'
								/>
								<MDBCardBody cascade className='text-center'>
									<MDBCardTitle>Our Hostels</MDBCardTitle>
									<MDBCardText>
										Sed ut perspiciatis unde omnis iste natus sit voluptatem
										accusantium doloremque laudantium, totam rem aperiam.
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</div>

				<div className='container d-block justify-content-center p-1'>
					<p>Make a search filter</p>

					<div className='row d-flex p-2'>
						<div className='col-sm-12 col-md-4'>
					<span>
						<b>By price / GHC</b>
					</span>
							<select
								className='browser-default custom-select'
								name='price'
								value={price}
								onChange={pri}>
								{Price.map((data, key) => (
									<option key={key}>{data}</option>
								))}
							</select>
						
						{/* <Row>
						
        				<Col span={12}>
						<Slider
							min={1}
							max={20}
							onChange={onChangePrice}
							value={typeof inputValuePrice === 'number' ? inputValuePrice : 0}
						/>
						</Col>
						<Col span={4}>
						<InputNumber
							min={1}
							max={20}
							style={{ margin: '0 16px' }}
							value={inputValuePrice}
							onChange={onChangePrice}
						/>
						</Col>
      				</Row> */}
						</div>

						<div className='col-sm-12 col-md-4'>
							<span>
								<b>By distance / m</b>
							</span>
							{/* <select
								className='browser-default custom-select'
								name='distance'
								value={distance}
								onChange={dis}>
								{Distance.map((data, key) => (
									<option key={key}>{data}</option>
								))}
							</select> */}
							<Row>
        				<Col span={12}>
						<Slider
							min={0}
							max={1500}
							onChange={onChangeDistance}
							value={typeof inputValueDistance === 'number' ? inputValueDistance : 0}
						/>
						</Col>
						<Col span={4}>
						<InputNumber
							min={0}
							max={1500}
							style={{ margin: '0 16px' }}
							value={inputValueDistance}
							onChange={onChangeDistance}
						/>
						</Col>
      				</Row>
						</div>

						<div className='col-sm-12 col-md-4'>
							{/* <span>
								<b>By Type / Mixed | Males | Females</b>
							</span>
							<select
								className='browser-default custom-select'
								name='type'
								value={hostelType}
								onChange={hostel_Type}>
								{types.map((data, key) => (
									<option key={key}>{data}</option>
								))}
							</select> */}
						</div>
					</div>
				</div>

				<div className='container-fluid pt-3 m-auto'>
					{spin()}
					<MDBRow>{filtered}</MDBRow>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Rooms;
