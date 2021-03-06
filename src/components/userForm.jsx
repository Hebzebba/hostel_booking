import React, { useState } from 'react';
import { Form, Input, Select, DatePicker,message } from 'antd';
import 'react-phone-number-input/style.css';
import {connect } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import * as actionTpes from '../store/actions/actionTypes';
import axios from "axios";
import moment from 'moment';
const UserForm = (props) => {
	const [componentSize, setComponentSize] = useState('');

	const [roomType, setroomType] = useState('');
	const [full_name, setfull_name] = useState(localStorage.getItem('user'));
	const [gender, setGender] = useState(localStorage.getItem('gender'));
	const [level, setLevel] = useState(localStorage.getItem('level'));
	const [room_number, setroom_number] = useState('');
	const [bed, setBed] = useState('');
	const [contact, setContact] = useState('');
	const [date, setDate] = useState(moment(new Date()));
	

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

	const handleChangeRoomType = (e) => {
		setroomType(e);
		props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				room_type:e
			}
	})
	};
	
	const handleChangeRoomNumber = (e) => {
	
		axios.post("http://localhost:5000/check", {
			e:e
		})
		.then(res => { 
			if (res.data.result != null) { 
			message.warn("The room has already been booked")
				
			props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				room_number:""
			}
		})
			}

			else {
			setroom_number(e);
			props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				room_number:e
			}
		})
			}
		})
		.catch(err=>err)
	};
	const handleChangeBed = (e) => {
		setBed(e);
	props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				bed:e
			}
	})
	};
	const handleChangeContact = (e) => {
		setContact(e);
	props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				phone_number:e
			}
	})
	};
	const handleChangeDate = (e) => {
		setDate(e);
	props.dispatch({
			type: actionTpes.BOOK_DATA_START,
			payload: {
				date:e
			}
	})
	};
	const handleFieldChange = () => { 

	}


	const checkRoomType = () => {
		if (roomType === '1 in a room') {
			return (
				<>
				<Form.Item label=' Room Number'>
					<Select onChange={handleChangeRoomNumber} defaultValue = "Select room number">
						{props.hostelName[0].map((data, key) => (
							<Select.Option key={key} value={data}>{data}</Select.Option>	
						))}
						</Select>
					</Form.Item>
					
				</>
			);
		} else if (roomType === '4 in a room') {
			return (
				<div>
				<Form.Item label='Room Number'>
					<Select onChange={handleChangeRoomNumber} defaultValue = "Select room number">
						{props.hostelName[1].map((data, key) => (
							<Select.Option key={key} value={data}>{data}</Select.Option>
						))}
						
					</Select>
					</Form.Item>
					<Form.Item label="Bunk bed">
						<Select onChange={handleChangeBed} defaultValue = "">
							<Select.Option value="1">1</Select.Option>
							<Select.Option value="2">2</Select.Option>
							<Select.Option value="3">3</Select.Option>
							<Select.Option value="4">4</Select.Option>
						</Select>
						<small className="text-danger">all odd numbers (1 & 3) are top bed and all even numbers (2 & 4) are down bed</small>
					</Form.Item>
					</div>
			);
		} else {
			return;
		}
	};

	return (
		<>
			<Form
				onFieldsChange={handleFieldChange}
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				initialValues={{
					size: componentSize,
				}}
				onValuesChange={onFormLayoutChange}
				size={componentSize}
				className='pt-3'>
				<Form.Item label='Full name' required={true}>
					<Input type='text' required={true}
						value={localStorage.getItem('user')}
						contentEditable={false}
					/>
				</Form.Item>
				<Form.Item label='Gender' required={true}>
					<Input type="text" value={localStorage.getItem('gender')} contentEditable={false}
					
					/>
				</Form.Item>

				<Form.Item label='Level' required={true}>
					<Input type="text" value={localStorage.getItem('level')} contentEditable={false}
					/>
				</Form.Item>

				<Form.Item label='Room Type' required={true}>
					<Select
						required={true}
						value={roomType}
						onChange={handleChangeRoomType}
						defaultValue='Select'>
						<Select.Option value='Select' name='Select'>
							Select
						</Select.Option>
						<Select.Option value='1 in a room' name='roomType'>
							1 in a room
						</Select.Option>
						<Select.Option value='4 in a room' name='roomType'>
							4 in a room
						</Select.Option>
					</Select>
				</Form.Item>
				{checkRoomType()}
				<Form.Item label='Contact' required={true}>
					<PhoneInput
						placeholder='Enter phone number'
						value={contact}
						onChange={handleChangeContact}
						defaultCountry="GH"
						limitMaxLength={true}
					/>
				</Form.Item>

				<Form.Item label='Date' required={true} >
					<DatePicker defaultValue={moment(new Date())} disabled onChange={handleChangeDate}/>
				</Form.Item>
			</Form>
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
	date : state.book.date,
})

export default connect(mapStateToProps)(UserForm);
