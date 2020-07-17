import React, { Component } from "react";
import { Row, Col, Form, Input, Button, InputNumber } from "antd";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
          >
            <Form.Item label="Hostel name">
              <Input />
            </Form.Item>

            <Form.Item label="Price">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Number of rooms">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Map link">
              <Input />
            </Form.Item>
            <Form.Item label="Click to post">
              <Button type="danger">Post</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Post;
