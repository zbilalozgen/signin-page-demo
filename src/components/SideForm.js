import React from 'react'

//Antd Components
import { Layout, Form, Input, Button, Row, Col, Typography } from 'antd'

//Antd Icons
import { MailOutlined, LockOutlined } from '@ant-design/icons'

//Antd Subcomponents
const { Sider } = Layout
const { Text } = Typography

//Form layout
const formItemLayout = {
  wrapperCol: { span: 24 },
}
const buttonLayout = {
  wrapperCol: { span: 24 }
}


export default function SideForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <>
      <Layout style={{ position: 'relative', height: '100%' }}>
        <Sider width={'100%'}>
          <Row style={{ marginTop: '40%' }}>
            <Col className="form__heading" span={12}>
              <Text>Sign In</Text>
            </Col>
            <Col className="form__buttons__signin" span={12}>
              <Button type="link">Sign up</Button>
            </Col>
          </Row>
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
          <Row className="form__disclaimer">
            <Col>
              <Button type="link">Terms of services</Button>
            </Col>
          </Row>
        </Sider>
      </Layout>
    </>
  )
}
