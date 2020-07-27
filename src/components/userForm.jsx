import React, { useState } from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const UserForm = () => {
	const [componentSize, setComponentSize] = useState('');
	const [value, setValue] = useState();

	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size);
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
				className='pt-3'>
				<Form.Item label='Full name' required={true}>
					<Input type='text' required={true} />
				</Form.Item>
				<Form.Item label='Gender' required={true}>
					<Select required={true}>
						<Select.Option value='male'>Male</Select.Option>
						<Select.Option value='female'>Female</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item label='Level' required={true}>
					<Select required={true}>
						<Select.Option value='level 100'>level 100</Select.Option>
						<Select.Option value='level 200'>level 200</Select.Option>
						<Select.Option value='level 300'>level 300</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item label='Room Type' required={true}>
					<Select required={true}>
						<Select.Option value='male'>1 in a room</Select.Option>
						<Select.Option value='male'>4 in a room</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item label='Date' required={true}>
					<DatePicker />
				</Form.Item>
			</Form>
		</>
	);
};

export default UserForm;
