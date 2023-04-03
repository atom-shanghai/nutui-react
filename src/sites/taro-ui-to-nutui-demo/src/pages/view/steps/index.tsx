import React from 'react'
import { Steps, Step } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface TimelinePageState {
  [key: string]: number
}

export default class TimelinePage extends React.Component<
  {},
  TimelinePageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 2,
    }
  }

  private onChange(stateName: string, current: number): void {
    this.setState({
      [stateName]: current,
    })
  }

  public render(): JSX.Element {
    const items1 = [{ title: '步骤一' }, { title: '步骤二' }]

    const items2 = [
      { title: '步骤一' },
      { title: '步骤二' },
      { title: '步骤三' },
    ]

    const items3 = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行' },
    ]

    const items4 = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'service',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        },
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        },
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'photograph',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        },
      },
    ]

    const items5 = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        status: 'checklist',
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        status: 'close',
      },
    ]

    return (
      <View className="page">
        <DocsHeader title="Steps 步骤条"></DocsHeader>

        <View className="doc-body">
          {/* 基础用法 */}
          <View className="panel">
            <View className="panel__title">基础用法</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps
                  current={this.state.current1}
                  onClickStep={this.onChange.bind(this, 'current1')}
                >
                  {items1.map((item, index) => {
                    return (
                      <Step title={item.title} activeIndex={index + 1}></Step>
                    )
                  })}
                </Steps>
                <Steps
                  current={this.state.current2}
                  onClickStep={this.onChange.bind(this, 'current2')}
                >
                  {items2.map((item, index) => {
                    return (
                      <Step title={item.title} activeIndex={index + 1}></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 带附加信息 */}
          <View className="panel">
            <View className="panel__title">带附加信息</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps
                  current={this.state.current3}
                  onClickStep={this.onChange.bind(this, 'current3')}
                >
                  {items3.map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        content={item.desc}
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 自定义图标 */}
          <View className="panel">
            <View className="panel__title">自定义图标</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps
                  current={this.state.current4}
                  onClickStep={this.onChange.bind(this, 'current4')}
                >
                  {items4.map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        icon={item.icon.value}
                        content={item.desc}
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 状态步骤条 */}
          <View className="panel">
            <View className="panel__title">状态步骤条</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps
                  current={this.state.current5}
                  onClickStep={this.onChange.bind(this, 'current5')}
                >
                  {items5.map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        icon={item.status}
                        content={item.desc}
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}