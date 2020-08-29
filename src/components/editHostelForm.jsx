import React, { Component } from 'react';
import { Form, Button, Input, InputNumber,Select,Upload,message } from 'antd'
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { addData } from '../store/actions/actions';
import { connect } from "react-redux";


class EditHostelForm extends Component {
	state = { 
		images: [],
		props : {
  		action: 'http://localhost:5000/upload',
	}
	 }

	selectedFiles = ({ file, fileList }) => { 
	if (file.status !== 'uploading') {
    }
		this.setState({ images: [...fileList] });
	}

	

	handleSubmit = (event) => {
		const imageNames = this.state.images.map(name => name.name);
		const { hostel_name, price, one_in_identity, four_in_identity, description, distance, merchant_id, hostel_type, map_area } = event
		this.props.dispatch(addData(hostel_name, price, one_in_identity, four_in_identity, description, distance, merchant_id, hostel_type, imageNames, map_area));
		message.success("Update Successful")
	}



	render() { 

		const dataSet = this.props.singleData.map((data,key) => { 
			if (data._id === this.props.hostelId) { 
				if (data === undefined)
			 return data;
			}
		})
	
	console.log(this.props)
	console.log(dataSet)
		return ( 
<div className="container d-block justify-content-center">
				<div style={{ width: "50%", padding: "20px", margin: "auto", height: "80vh", overflowY: "auto" }}>
					<center><h2>Post Content</h2></center>
<Form onFinish={this.handleSubmit} >
	<Form.Item name="hostel_name">
	<Input  placeholder="Hostel Name"/>
	</Form.Item>
	<Form.Item name="price">
	<InputNumber style={{width:"100%"}} placeholder="price" type="number"/>
	</Form.Item>
	<Form.List name="one_in_identity">
	{(fields, { add, remove }) => {
	return (
		<div>
			<label >One in a room</label>
	{fields.map((field, index) => (
	<Form.Item
	required={false}
	key={field.key}
	>
	<Form.Item
	{...field}
	validateTrigger={['onChange', 'onBlur']}
	rules={[
	{
	required: true,
	whitespace: true,
	message: "Please input room number",
	},
	]}
	noStyle
	>
	<Input placeholder="Room Number" style={{ width: '100%' }} />
	</Form.Item>
	{fields.length > 1 ? (
	<MinusCircleOutlined
	className="dynamic-delete-button"
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
	type="dashed"
	onClick={() => {
	add();
	}}
	style={{ width: '60%' }}
	>
<PlusOutlined /> Add field</Button></Form.Item></div>);}}
      </Form.List>

						
	<Form.List name="four_in_identity">
	{(fields, { add, remove }) => {
	return (
		<div>
			<label >Four in a room</label>
	{fields.map((field, index) => (
	<Form.Item
	required={false}
	key={field.key}
	>
	<Form.Item
	{...field}
	validateTrigger={['onChange', 'onBlur']}
	rules={[
	{
	required: true,
	whitespace: true,
	message: "Please input room number",
	},
	]}
	noStyle
	>
	<Input placeholder="Room Number" style={{ width: '100%' }} />
	</Form.Item>
	{fields.length > 1 ? (
	<MinusCircleOutlined
	className="dynamic-delete-button"
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
	type="dashed"
	onClick={() => {
	add();
	}}
	style={{ width: '60%' }}
	>
<PlusOutlined /> Add field</Button></Form.Item></div>);}}
      </Form.List>

	<Form.Item name="description">
<Input.TextArea placeholder="Description"  rows={10}/>				
</Form.Item>
						
<Form.Item name="distance">
	<InputNumber style={{width:"100%"}} placeholder="Distance" type="number"/>
</Form.Item>	

<Form.Item required={true} name="merchant_id">
	<InputNumber style={{width:"100%"}} placeholder="Merchant ID" type="number"/>
		</Form.Item>							
	<Form.Item>
<Form.Item name="hostel_type">
	
	<Select placeholder="Select hostel type">
		<Select.Option value="Mixed">Mixed</Select.Option>							
		<Select.Option value="Males">Males</Select.Option>							
		<Select.Option value="Females">Females</Select.Option>							
	</Select>							
	</Form.Item>
		<Form.Item name="map_area">
	<Input  placeholder="Hostel Map"/>
	</Form.Item>
		<Form.Item>
	<Upload {...this.state.props} multiple name="hostel_image" onChange={this.selectedFiles}>
    <Button>
      <UploadOutlined /> Upload
    </Button>
  </Upload>,					
		</Form.Item>
        <Button type="primary" htmlType="submit" size="middle">
          Update
        </Button>
      </Form.Item>
				</Form>
			</div>
</div>
		 );
	}
}
 

const mapStateToProps = state => ({
	singleData:state.data.datalist
})
export default connect(mapStateToProps)(EditHostelForm);