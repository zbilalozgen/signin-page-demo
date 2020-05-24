import React from 'react'
import {connect} from "react-redux";

//Utility
import isMobile from "ismobilejs"

//Antd components
import { Layout, Avatar } from 'antd'

//Antd icons
import { UserOutlined } from '@ant-design/icons';


const { Header } = Layout

function CustomHeader(props) {
  const isMobileDevice = isMobile().phone

  return (
    <Header className="header">
      {!!isMobileDevice && <span onClick={() => props.handleModal(true)}><Avatar size="small" icon={<UserOutlined/>}/></span>}
      <a href="#">Home</a>
      <a href="#">Support</a>
      <a href="#">Contact</a>
    </Header>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    handleModal: (isOpen) => {
    dispatch({type: "HANDLE_MODAL", payload: isOpen})
    }
  }
}

export default connect(null,mapDispatchToProps)(CustomHeader)
