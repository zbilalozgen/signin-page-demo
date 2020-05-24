import React from 'react';
import CustomHeader from '../components/CustomHeader.js'
import MainContent from '../components/MainContent.js'
import SideForm from '../components/SideForm.js'

//Utility
import isMobile from "ismobilejs"

//Antd components
import { Row, Col } from 'antd'
import LoginDialog from "../components/LoginDialog"

function Container() {
  const isMobileDevice = isMobile().phone
  return (
    <div>
      <Row>
        <Col className="wrapper__left" xs={24} lg={16}>
          <Row>
            <Col span={24}>
              <CustomHeader/>
            </Col>
          </Row>
          <Row>
            <Col className="content" span={24}>
              <MainContent />
            </Col>
          </Row>
        </Col>
        <Col xs={0} lg={8}>
          <Row className="wrapper__right">
            <Col offset={2} span={20}>
              <SideForm />
            </Col>
          </Row>
        </Col>
      </Row>
      {isMobileDevice &&
      <Row>
        <Col offset={2} span={20}>
          <LoginDialog/>
        </Col>
      </Row>
      }
    </div>
  )
}



export default Container