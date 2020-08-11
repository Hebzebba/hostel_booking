import React, { useState, useEffect } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import 'react-phone-number-input/style.css';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import { booking } from '../store/actions/actions';

const UserForm = (props) => {
	const dispatch = useDispatch();
	const [componentSize, setComponentSize] = useState('');

	const [roomType, setroomType] = useState('');
	const [value, setValue] = useState();
	const [room_number, setRoom_number] = useState('');
	const [bed, setBed] = useState('');

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
	};

	const handleChange = (value) => {
		setroomType(value);
	};

	const handleBed = (e) => {
		setBed(e);
	};
	const handleRoomNumber = (e) => {
		setRoom_number(e);
	};

	const checkRoomType = () => {
		if (roomType === '1 in a room') {
			return (
				<Form.Item label=' Room Number' name='room_number'>
					<Select onChange={handleRoomNumber}>
						{props.hostelName[0].map((data, key) => (
							<Select.Option key={key} value={data}>
								{data}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
			);
		} else if (roomType === '4 in a room') {
			return (
				<div>
					<Form.Item label='Room Number' name='room_number'>
						<Select onChange={handleRoomNumber}>
							{props.hostelName[1].map((data, key) => (
								<Select.Option key={key} value={data}>
									{data}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item label='Bunk bed' name='bed'>
						<Select name='bed' value={bed} onChange={handleBed}>
							<Select.Option value='Top Bed'>Top Bed</Select.Option>
							<Select.Option value='Down Bed'>Down Bed</Select.Option>
						</Select>
					</Form.Item>
				</div>
			);
		} else {
			return;
		}
	};

	const handleSubmit = (value) => {
		const {
			full_name,
			gender,
			level,
			room_type,
			hostel_type,
			tel_number,
			date,
		} = value;
		// console.log(value);
		// console.log(`${bed} ${room_number}`);
		dispatch(
			booking(
				full_name,
				gender,
				level,
				room_type,
				room_number,
				bed,
				hostel_type,
				tel_number,
				date
			)
		);
	};

	return (
		<>
			<Form
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
				className='pt-3'
				onFinish={handleSubmit}>
				<Form.Item label='Full name' required={true} name='full_name'>
					<Input type='text' required={true} />
				</Form.Item>
				<Form.Item label='Gender' required={true} name='gender'>
					<Select required={true}>
						<Select.Option value='male'>Male</Select.Option>
						<Select.Option value='female'>Female</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item label='Level' required={true} name='level'>
					<Select required={true}>
						<Select.Option value='level 100'>level 100</Select.Option>
						<Select.Option value='level 200'>level 200</Select.Option>
						<Select.Option value='level 300'>level 300</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item label='Room Type' required={true} name='room_type'>
					<Select
						required={true}
						value={roomType}
						onChange={handleChange}
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
				<Form.Item label='Contact' required={true} name='tel_number'>
					<PhoneInput
						placeholder='Enter phone number'
						value={value}
						onChange={setValue}
					/>
				</Form.Item>

				<Form.Item label='Date' required={true} name='date'>
					<DatePicker />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Finish
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default UserForm;
