import React from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";

//Form layout
const formItemLayout = {
  wrapperCol: { span: 24 },
}
const buttonLayout = {
  wrapperCol: { span: 24 }
}

function LoginInputs(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form
      name="login-form"
      style={{ marginTop: '10%' }}
      {...formItemLayout}
      layout={'horizontal'}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email',
          },
          {
            required: true,
            message: 'Please enter your email!',
          },
        ]}
        hasFeedback={true}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email adress" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item {...buttonLayout} className="form__buttons">
        <Row>
          <Col className="form__buttons__forgot" span={12}>
            <Button size="large" type="link">Forgot Password</Button>
          </Col>
          <Col className="form__buttons__signin" span={12}>
            <Button size="large" type="primary" htmlType="submit">Sign in</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}

export default LoginInputs;