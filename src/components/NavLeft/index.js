import React, { Component } from "react";
import { Menu } from 'antd';
import MenuList from "../../config/menuConfig";
import "./index.less";

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTree: []
    }
  }
  componentDidMount() {
    const menuTree = this.renderMenu(MenuList);
    console.log(menuTree);
    this.setState({
      menuTree
    });
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    });
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>Bike Manage</h1>
        </div>
        <Menu
          theme="dark"
        >
          { this.state.menuTree }
        </Menu>
      </div>
    );
  }
}

export default NavLeft;