import React, { Component } from "react";
import { Row, Col } from "antd";
import { formatDate } from "../../utils";
import "./index.less";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      sysTime: ""
    }
    this.getTime();
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="javascriopt: void(0);">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴</span>
          </Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      userName: "超级无敌杜小胖"
    })
  }
  getTime() {
    setInterval(() => {
      let sysTime = formatDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
  }
}

export default Header;