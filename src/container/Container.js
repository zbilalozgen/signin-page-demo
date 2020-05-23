import React from 'react';
import CustomHeader from '../components/CustomHeader.js'
import MainContent from '../components/MainContent.js'
import SideForm from '../components/SideForm.js'


//Antd components
import { Row, Col } from 'antd'

export default function Container() {
  return (
    <div>
      <Row>
        <Col className="wrapper__left" span={16}>
          <Row>
            <Col span={24}>
              <CustomHeader />
            </Col>
          </Row>
          <Row>
            <Col className="content" span={24}>
              <MainContent />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row className="wrapper__right">
            <Col offset={2} span={20}>
              <SideForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
