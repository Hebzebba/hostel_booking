import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFileInput } from 'mdbreact';
import { addData } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 4 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 20 },
	},
};
const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 24, offset: 0 },
		sm: { span: 20, offset: 4 },
	},
};

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hostel_name: '',
			price: 0,
			room_capacity: 0,
			description: '',
			distance: 0,
			hostel_type: '',
			// hostel_image: [{ filename: '23.jpg' }],
			map_area: '',
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	fileSelectedHandler = (e) => {
		this.setState({
			[e.target.name]: [...this.state.hostel_image, ...e.target.files],
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(
			addData(
				this.state.hostel_name,
				this.state.price,
				this.state.room_capacity,
				this.state.description,
				this.state.distance,
				this.state.hostel_type,
				this.state.hostel_image,
				this.state.map_area
			)
		);
	};

	DynamicFieldSet = () => {};
	onFinish = (values) => {
		console.log('Received values of form:', values);
		console.log('Received values of form:', this.state.hostel_name);
	};
	render() {
		return (
			<>
				<MDBContainer>
					<MDBRow>
						<MDBCol md='6'>
							{/* <form method='Post' onSubmit={this.handleSubmit}> */}
							{/* <p className='h4 text-center mb-1'>Post Data</p>
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
									Price
								</label>
								<input
									type='number'
									id='defaultFormRegisterEmailEx'
									className='form-control'
									value={this.state.price}
									onChange={this.handleChange}
									name='price'
								/> */}

							{/* <label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Room Capacity
								</label>
								<input
									type='number'
									id='defaultFormRegisterConfirmEx'
									className='form-control'
									value={this.state.room_capacity}
									onChange={this.handleChange}
									name='room_capacity'
								/> */}

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
														label={index === 0 ? 'Passengers' : ''}
														required={false}
														key={field.key}>
														<Form.Item
															{...field}
															validateTrigger={['onChange', 'onBlur']}
															rules={[
																{
																	required: true,
																	whitespace: true,
																	message:
																		"Please input passenger's name or delete this field.",
																},
															]}
															noStyle>
															<Input
																placeholder='passenger name'
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
														label={index === 0 ? 'Passengers' : ''}
														required={false}
														key={field.key}>
														<Form.Item
															{...field}
															validateTrigger={['onChange', 'onBlur']}
															rules={[
																{
																	required: true,
																	whitespace: true,
																	message:
																		"Please input passenger's name or delete this field.",
																},
															]}
															noStyle>
															<Input
																placeholder='passenger name'
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

								<label
									htmlFor='defaultFormRegisterConfirmEx'
									className='grey-text'>
									Hostel Image
								</label>
								<div className='input-group'>
									<input
										type='file'
										multiple
										name='hostel_image'
										accept='images/.jpg, .jpeg, .png'
										onChange={this.fileSelectedHandler}
									/>
								</div>

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

								{/* <Form.Item>
									<Button type='primary' htmlType='submit'>
										Submit
									</Button>
								</Form.Item> */}
							</Form>

							{/* </form> */}
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</>
		);
	}
}

export default connect()(Post);
