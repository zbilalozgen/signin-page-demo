import React from 'react';
import {Button, Col, Form, Input, Row, Modal} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {handleModal} from "../redux/action";

//Form layout
const formItemLayout = {
  wrapperCol: { span: 24 },
}
const buttonLayout = {
  wrapperCol: { span: 24 }
}

interface UserInput {
  email: string,
  password: string
}

function LoginInputs({handleModal}: LinkDispatchProps) {
  const [form] = Form.useForm();
  const onFinishHandler = (values:any) => {
    handleModal(false)
    Modal.info({
      centered: true,
      title: 'Currently we have a scheduled maintenance',
      content: (
        <div>
          <p>Thanks for interest {values.email}, please try again later.</p>
        </div>
      ),
      okText: 'Close'
    })
  }

  return (
    <Form
      name="login-form"
      style={{ marginTop: '10%' }}
      {...formItemLayout}
      layout={'horizontal'}
      form={form}
      onFinish={onFinishHandler}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email address',
          },
          {
            required: true,
            message: 'Please enter your email address!',
          },
        ]}
        hasFeedback={true}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email Address" />
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

interface LinkDispatchProps {
  handleModal: (isOpen: boolean) => void
}


function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleModal: (isOpen: boolean) => dispatch(handleModal(isOpen))
  }
}

export default connect(null, mapDispatchToProps)(LoginInputs)