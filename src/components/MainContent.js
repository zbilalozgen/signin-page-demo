import React from 'react'
import { Row, Col, Typography, Layout, Divider } from 'antd'
import content from '../content-img.png'


const { Title, Text } = Typography;
const { Content } = Layout


export default function MainContent() {

  return (
    <>
      <Content>
        <Row>
          <Col xs={24} lg={10} className="content__heading">
            <Col span={24}>
              <Title level={1}>New Features<br /> in <span style={{ fontWeight: 'bold' }}>Designer</span></Title>
            </Col>
            <Col span={18}>
              <Text className="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat, dolores aliquid quasi dolorum facilis ullam nisi recusandae omnis distinctio.</Text>
            </Col>
          </Col>
          <Col xs={0} lg={14}>
            <img className="content__img" src={content} />
          </Col>
        </Row>
        <div className="content__announcements">
          <Row>
            <Col span={24}>
              <Text strong={true} style={{ fontSize: '10px' }}>12 May 2020</Text>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={7}>
              <Text strong={true}>Lorem ipsum dolor sit amet</Text>
            </Col>
            <Col span={17}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque libero illum voluptatibus modi. Quam ex necessitatibus magnam similique ab. Est dolores blanditiis nostrum voluptatibus sint earum in, aspernatur explicabo.</Text>
            </Col>
          </Row>
          <Divider/>
          <Row>
            <Col xs={24} lg={7}>
              <Text strong={true}>Lorem ipsum dolor</Text>
            </Col>
            <Col span={17}>
              <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda dolorum explicabo vitae minima, doloribus architecto consequatur ratione nobis eum cum.</Text>
            </Col>
          </Row>
          <Divider/>
          <Row>
            <Col xs={24} lg={7}>
              <Text strong={true}>Lorem ipsum</Text>
            </Col>
            <Col span={17}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam.</Text>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  )
}
