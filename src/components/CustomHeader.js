import React from 'react'

import { Layout } from 'antd'
const { Header } = Layout


export default function CustomHeader() {
  return (
    <Header className="header">
      <a href="#">Home</a>
      <a href="#">Support</a>
      <a href="#">Contact</a>
    </Header>
  )
}
