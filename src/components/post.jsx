import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFileInput } from 'mdbreact';
import { addData } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Form, Input, Button, Upload, message } from 'antd';
import {
	MinusCircleOutlined,
	PlusOutlined,
	UploadOutlined,
} from '@ant-design/icons';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hostel_name: '',
			price: 0,
			description: '',
			distance: 0,
			hostel_type: '',
			hostel_image: null,
			map_area: '',
		};
	}

	// handleChange = (event) => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// };

	fileSelectedHandler = (e) => {
		this.setState({
			hostel_image: e.target.files,
		});
		console.log(e.target.files);
		// console.log(e);
	};

	handleSubmit = (event) => {
		const fd = new FormData();
		fd.append('hostel_image', this.state.hostel_image);
		event.preventDefault();
		this.props.dispatch(
			addData(fd)
			// this.state.hostel_name,
			// this.state.price,
			// [],
			// [],
			// '',
			// this.state.description,
			// this.state.distance,
			// this.state.hostel_type,

			// this.state.map_area
		);
	};
	upload = (e) => {
		const fd = new FormData();
		fd.append('hostel_image', this.state.hostel_image);
		this.props.dispatch(addData(fd));
	};

	// onFinish = (values) => {
	// 	// console.log('Received values of form:', values);
	// 	// console.log('Received values of form:', this.state.hostel_name);

	// 	let file = new Blob([JSON.stringify({})], { type: 'application/json' });

	// 	const fd = new FormData();
	// 	fd.append('hostel_image', this.state.hostel_image);

	// 	// this.state.hostel_image.forEach((file) => {
	// 	// 	fd.append('hostel_image[]', file.image, file.name);
	// 	// });

	// 	// fd.append('hostel_image', JSON.stringify(this.state.hostel_image));

	// 	this.props.dispatch(
	// 		addData(
	// 			this.state.hostel_name,
	// 			this.state.price,
	// 			[],
	// 			[],
	// 			[],
	// 			this.state.description,
	// 			this.state.distance,
	// 			this.state.hostel_type,
	// 			fd,
	// 			this.state.map_area
	// 		)
	// 	);
	// };
	render() {
		console.log(this.state.hostel_image);

		return (
			<>
				<MDBContainer>
					<MDBRow>
						<MDBCol md='6'>
							<Form
								name='dynamic_form_item'
								{...formItemLayoutWithOutLabel}
								onFinish={this.onFinish}>
								<p className='h4 text-center mb-1'>Post Data</p>
								<label
									htmlFor='defaultFormRegisterNameEx'
									className='grey-text'>
									Hostel Name
								</label>
								<input
									type='text'
									id='defaultFormRegisterNameEx'
									className='form-control'
									value={this.state.hostel_name}
									onChange={this.handleChange}
									name='hostel_name'
								/>

								<label
									htmlFor='defaultFormRegisterEmailEx'
									className='grey-text'>
									Hostel Contact
								</label>
								<input
									type='number'
									id='defaultFormRegisterEmailEx'
									className='form-control'
									value={this.state.price}
									onChange={this.handleChange}
									name='contact'
								/>
								<br />
								<label
									htmlFor='defaultFormRegisterEmailEx'
									className='grey-text'>
									Price
								</label>
								<input
									type='number'
									id='defaultFormRegisterEmailEx'
									className='form-control'
									value={this.state.price}
									onChange={this.handleChange}
									name='price'
								/>
								<br />
								<label htmlFor='names'>One In A Room</label>
								<Form.List name='names'>
									{(fields, { add, remove }) => {
										return (
											<div>
												{fields.map((field, index) => (
													<Form.Item
														{...(index === 0
															? formItemLayout
															: formItemLayoutWithOutLabel)}
														label={index === 0 ? 'Room Number' : ''}
														required={false}
														key={field.key}>
														<Form.Item
															{...field}
															validateTrigger={['onChange', 'onBlur']}
															rules={[
																{
																	required: true,
																	whitespace: true,
																	message: 'Please input Room Number.',
																},
															]}
															noStyle>
															<Input
																placeholder='room number'
																style={{ width: '60%' }}
															/>
														</Form.Item>
														{fields.length > 1 ? (
															<MinusCircleOutlined
																className='dynamic-delete-button'
																style={{ margin: '0 8px' }}
																onClick={() => {
																	remove(field.name);
																}}
															/>
														) : null}
													</Form.Item>
												))}
												<Form.Item>
													<Button
														type='dashed'
														onClick={() => {
															add();
														}}
														style={{ width: '60%' }}>
														<PlusOutlined /> Add field
													</Button>
												</Form.Item>
											</div>
										);
									}}
								</Form.List>

								<br />
								<label htmlFor='names'>Four In A Room</label>
								<Form.List name='names'>
									{(fields, { add, remove }) => {
										return (
											<div>
												{fields.map((field, index) => (
													<Form.Item
														{...(index === 0
															? formItemLayout
															: formItemLayoutWithOutLabel)}
														label={index === 0 ? 'Room Number' : ''}
														required={false}
														key={field.key}>
														<Form.Item
															{...field}
															validateTrigger={['onChange', 'onBlur']}
															rules={[
																{
																	required: true,
																	whitespace: true,
																	message: 'Please input Room Number.',
																},
															]}
															noStyle>
															<Input
																placeholder='room number'
																style={{ width: '60%' }}
															/>
														</Form.Item>
														{fields.length > 1 ? (
															<MinusCircleOutlined
																className='dynamic-delete-button'
																style={{ margin: '0 8px' }}
																onClick={() => {
																	remove(field.name);
																}}
															/>
														) : null}
													</Form.Item>
												))}
												<Form.Item>
													<Button
														type='dashed'
														onClick={() => {
															add();
														}}
														style={{ width: '60%' }}>
														<PlusOutlined /> Add field
													</Button>
												</Form.Item>
											</div>
										);
									}}
								</Form.List>

								<label
									htmlFor='defaultFormRegisterPasswordEx'
									className='grey-text'>
									Description
								</label>
								<div className='input-group'>
									<div className='input-group-prepend'>
										<span className='input-group-text' id='basic-addon'>
											<i className='fas fa-pencil-alt prefix'></i>
										</span>
									</div>
									<textarea
										className='form-control'
										id='exampleFormControlTextarea1'
										rows='5'
										value={this.state.description}
										onChange={this.handleChange}
										name='description'></textarea>
								</div>

								<label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Distance
								</label>
								<input
									type='number'
									id='defaultFormRegisterConfirmEx'
									className='form-control'
									value={this.state.distance}
									onChange={this.handleChange}
									name='distance'
								/>

								<label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Hostel Type
								</label>
								<div>
									<select
										className='browser-default custom-select'
										value={this.state.hostel_type}
										onChange={this.handleChange}
										name='hostel_type'>
										<option>Choose your option</option>
										<option value='Mixed'>Mixed</option>
										<option value='Males'>Males</option>
										<option value='Females'>Females</option>
									</select>
								</div>

								{/* <label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Hostel Image
								</label>
								<div className='input-group'>
									<input
										type='file'
										multiple
										name='hostel_image'
										accept='images/*'
										method='Post'
										onChange={this.fileSelectedHandler}
									/>
								</div> */}
								<br />
								<Upload {...props}>
									<Button>
										<UploadOutlined /> Click to Upload
									</Button>
								</Upload>

								<label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Map Url
								</label>
								<input
									type='text'
									id='defaultFormRegisterConfirmEx'
									className='form-control'
									value={this.state.map}
									onChange={this.handleChange}
									name='map_area'
								/>

								<div className='text-center mt-4'>
									<MDBBtn color='unique' type='submit' className='text-light'>
										Post
									</MDBBtn>
								</div>
							</Form>
						</MDBCol>
					</MDBRow>
				</MDBContainer>

				{/* <form
					action='http://localhost:5000/add'
					method='post'
					encType='multipart/form-data'
					onSubmit={this.handleSubmit}>
					<input
						type='file'
						name='hostel_image'
						multiple
						onChange={this.fileSelectedHandler}
					/>
					<input type='submit' />
				</form> */}
			</>
		);
	}
}

const layout = {
	labelCol: { span: 10 },
	wrapperCol: { span: 18 },
};

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 10 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 20 },
	},
};
const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 24, offset: 0 },
		sm: { span: 20, offset: 10 },
	},
};

const props = {
	name: 'file',
	action: 'http://localhost:5000/add',
	headers: {
		// authorization: 'authorization-text',
		'Content-Type': 'multipart/form-data',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

export default connect()(Post);
