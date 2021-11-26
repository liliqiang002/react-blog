import React from "react";
import { connect } from "react-redux";

import { Cascader, Input } from 'antd';
import MyEditor from "../../component/editor";
import './index.scss'
class Publish extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  handleCatChange = (value, selectedOptions) => {
    // console.log(value, selectedOptions)
  }
  handleContentChange (content) {
    // console.log(content)
  }
  handleSave = () => {
    this.props.updateCounter({type: 'update_counter', data: 4})
  }
  componentDidMount () {
    // console.log(this.props.params)
  }
  render () {
    const options = [
      {
        value: '1',
        label: '文档',
        children: [
          {
            value: '1-1',
            label: 'React'
          },
          {
            value: '1-2',
            label: 'react-router'
          },
          {
            value: '1-3',
            label: 'react-redux'
          },
        ],
      },
      {
        value: '2',
        label: '教程',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing'
          },
        ],
      },
      {
        value: '3',
        label: '社区',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing'
          },
        ],
      },
      {
        value: '4',
        label: '资源',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing'
          },
        ],
      }
    ];
    return (
      <div className="publish-container">
        <div className="publish-header">
          <div className="cat-box">
          <Cascader
            className="cascader-box"
            bordered={false}
            expandTrigger="hover" options={options} onChange={this.handleCatChange} placeholder="请选择分类" />
          </div>
          <div className="title">
            <Input bordered={false} defaultValue="" placeholder='请输入标题' />
          </div>
          <div onClick={this.handleSave} className="save-btn">发布{this.props.counter.num}</div>
        </div>
        <div className="editor-container">
          <MyEditor onContentChange={this.handleContentChange} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateCounter: (actions) => dispatch(actions)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Publish)
