import React from 'react'

//Antd Components
import { Layout, Button, Row, Col, Typography } from 'antd'
import LoginInputs from "./LoginInputs";

//Antd Subcomponents
const { Sider } = Layout
const { Text } = Typography




export default function SideForm() {


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
            <LoginInputs/>
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
