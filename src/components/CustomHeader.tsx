import React from 'react'
import {connect} from "react-redux";

//Utility
import isMobile from "ismobilejs"

//Antd components
import { Layout, Avatar, Button, Menu } from 'antd'

//Antd icons
import { UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {Dispatch} from "redux";
import {handleModal} from "../redux/action";


const { Header } = Layout
const { SubMenu } = Menu

//Mobile menu renderer
const renderMobileMenu = (props: LinkDispatchProps) => (
  <>
    <Menu className="header__mobile-menu" mode="horizontal">
      <SubMenu
        title={
          <span style={{margin: 0}}>
              <MenuUnfoldOutlined style={{marginLeft: 0}}/>
              Menu
            </span>
        }
      >
        <Menu.Item>
          <a href="#">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Support</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#">Contact</a>
        </Menu.Item>
      </SubMenu>
    </Menu>
    <Button className="signin-button" onClick={() => props.handleModal(true)} type="default"><Avatar size="small" icon={<UserOutlined/>}/>Sign in</Button>
  </>
)

//Desktop menu renderer
const renderDesktopMenu = () => (
  <>
  <a href="#">Home</a>
  <a href="#">Support</a>
  <a href="#">Contact</a>
  </>
)

function CustomHeader(props: LinkDispatchProps) {
  const isMobileDevice = isMobile().phone

  return (
    <Header className="header">
      {isMobileDevice ? renderMobileMenu(props) : renderDesktopMenu()}
    </Header>
    )
}

interface LinkDispatchProps {
  handleModal: (isOpen: boolean) => void
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleModal: (isOpen: boolean) => dispatch(handleModal(isOpen))
  }
}

export default connect(null,mapDispatchToProps)(CustomHeader)
