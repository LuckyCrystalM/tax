import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button,Input,Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import header from '../../static/header.png';

import './index.less'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config: Config = {
    navigationBarTitleText: '登录'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
          <View className="header">
            <Image className="image" src={header}/>
          </View>
          <View className="content">
            <View className="box">
              <View className="list">
                <Input className="input" type='text' placeholder='请输入手机号'/>
              </View>
              <View className="list">
                <Input className="input" type='password' placeholder='请输入密码'/>
              </View>
              <View className="wrapper">
                <View className="left"><Input className="code" placeholder="请输入验证码"/></View>
                <View className="right"></View>
              </View>
              <View className="btngroup"><Button className="btn">登录</Button></View>
            </View>
          </View>
      </View>
    )
  }
}


export default Index as ComponentClass<PageOwnProps, PageState>
