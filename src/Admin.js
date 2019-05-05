import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./components/Header"
import Footer from "./components/Footer"

class Admin extends Component {
  render() {
    return (
      <Row>
        <Col span={3}>right</Col>
        <Col span={21}>
          <Header></Header>
          <Row></Row>
          <Footer></Footer>
        </Col>
      </Row>
    );
  }
};

export default Admin;