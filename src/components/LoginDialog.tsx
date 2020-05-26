import React from 'react';
import {connect} from "react-redux";
//Custom componenets
import LoginInputs from "./LoginInputs"

//Antd components
import {Modal} from 'antd'
import {AppState} from "../redux/store";
import {Dispatch} from "redux";
import {handleModal} from "../redux/action";

type Props = LinkDispatchProps & LinkStateProps

function LoginDialog({isOpen, handleModal}: Props) {

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

interface LinkStateProps {
    isOpen: boolean
}

interface LinkDispatchProps {
    handleModal: (isOpen: boolean) => void
}


function mapStateToProps(state: AppState) {
  const {isOpen} = state
  return {isOpen}
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        handleModal: (isOpen: boolean) => dispatch(handleModal(isOpen))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginDialog)