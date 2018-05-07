/*
注册路由组件
 */
import React, {Component} from 'react';
import {NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile';

import Logo from '../../components/logo/logo';

const RadioItem = Radio.RadioItem;

export default class Register extends Component {

  //初始属性
  state = {
    name: '',
    pwd: '',
    pwd2: '',
    type: 'boss'
  };

  //切换到登陆
  toLogin = () => {
    this.props.history.replace('/login');
  };

  //处理注册
  dealRegister = () => {

  };

  //通用的change方法
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
            <InputItem onChange={(val) => {this.handleChange('name', val)}}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={(val) => {this.handleChange('pwd', val)}}>密 码：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={(val) => {this.handleChange('pwd2', val)}}>确认密码：</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type==='genius'} onClick={()=>{this.handleChange('type', 'genius')}}>牛人</RadioItem>
            <RadioItem checked={this.state.type==='boss'} onClick={()=>{this.handleChange('type', 'boss')}}>Boss</RadioItem>
            <Button type="primary" onClick={this.dealRegister}>注册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}