import React from 'react';
import {connect} from "react-redux";
//Custom componenets
import LoginInputs from "./LoginInputs"

//Antd components
import {Modal} from 'antd'

function LoginDialog({isOpen, handleModal}) {

  return (
    <>
      <Modal
        title="Sign In"
        visible={isOpen}
        footer={null}
        onCancel={()=>handleModal(false)}
      >
        <LoginInputs/>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  const {isOpen} = state
  return {isOpen}
}

function mapDispatchToProps(dispatch) {
  return {
    handleModal: (isOpen) => {
      dispatch({type: "HANDLE_MODAL", payload: isOpen})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginDialog)