import React, { Component } from 'react';
import { Form, Button, Input, InputNumber,Select } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
class Post extends Component {
	state = {  }
	render() { 
		return ( 
<div className="container d-block justify-content-center">
				<div style={{ width: "50%", padding: "20px", margin: "auto", height: "80vh", overflowY: "auto" }}>
					<center><h2>Post Content</h2></center>
<Form>
	<Form.Item >
	<Input  placeholder="Hostel Name"/>
	</Form.Item>
	<Form.Item >
	<InputNumber style={{width:"100%"}} placeholder="price" type="number"/>
	</Form.Item>
	<Form.List name="roomNumber">
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
	message: "Please input passenger's nadelete this field.",
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

						
	<Form.List name="roomNumber">
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
	message: "Please input passenger's nadelete this field.",
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

	<Form.Item>
<Input.TextArea placeholder="Description"  rows={10}/>				
</Form.Item>
						
<Form.Item >
	<InputNumber style={{width:"100%"}} placeholder="Distance" type="number"/>
		</Form.Item>				
	<Form.Item>
<Form.Item>
	<Select placeholder="Select hostel type">
		<Select.Option value="Mixed">Mixed</Select.Option>							
		<Select.Option value="Males">Males</Select.Option>							
		<Select.Option value="Females">Females</Select.Option>							
	</Select>							
	</Form.Item>
		<Form.Item >
	<Input  placeholder="Hostel Map"/>
	</Form.Item>
	<div className="mb-4">
	<input type="file" multiple />						
	</div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
				</Form>
			</div>
</div>
		 );
	}
}
 
export default Post;