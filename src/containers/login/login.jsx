/*
登陆路由组件
 */
import React, {Component} from 'react';
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Button} from 'antd-mobile';

import Logo from '../../components/logo/logo';

export default class Login extends Component {
  state = {
    name: ',',
    pwd: ''
  };

  //切换到登陆
  toRegister = () => {
    this.props.history.replace('/register');
  };

  //通用change函数
  handleChange = (name, value) => {
    this.setState({[name]: value});
  };

  render() {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={(val) => {
              this.handleChange('name', val)
            }}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={(val) => {
              this.handleChange('pwd', val)
            }}>密 码：</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.dealRegister}>登陆</Button>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}