import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";

const UserForm = () => {
  const [componentSize, setComponentSize] = useState("default");

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
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Full name" name="size">
          <Input type="text" required={true} />
        </Form.Item>
        <Form.Item label="Last name">
          <Input type="email" required={true} />
        </Form.Item>
        <Form.Item label="Gender" required={true}>
          <Select required={true}>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Tel">
          <InputNumber />
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
