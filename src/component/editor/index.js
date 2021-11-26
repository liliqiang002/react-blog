import React from "react";
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
// 导入编辑器的样式
import 'react-markdown-editor-lite/lib/index.css';
import './index.scss'
class MyEditor extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  handleEditorChange = ({ html, text }) => {
    this.props.onContentChange({ html, text})
  }
  render () {
    // 初始化Markdown解析器
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    return (
      <MdEditor style={{ height: '100%' }} renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange} />
    )
  }
}
export default MyEditor
