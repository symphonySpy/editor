import React, { Component } from 'react'
import './scss/post.scss';

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.execCmd = this.execCmd.bind(this);
  }

  execCmd (e, command){
    document.execCommand(command, false, null);
  }

  

  render() {

    return (
      <div className="editor_post">
        <div className="tool">
          <div className="editor_text">
            <a href="javascript:void(0);" onClick={(e) => this.execCmd(e,'bold')}><i className="fas fa-bold" ></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'italic')}><i className="fas fa-italic" ></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'underline')}><i className="fas fa-underline" ></i></a>
          </div>

          <div className="editor_file">
            <i className="fas fa-file-image"></i>
            <i className="fas fa-link"></i>
          </div>

          <div className="editor_settext">
            <a href="#" onClick={(e) => this.execCmd(e,'justifyLeft')}><i className="fas fa-align-left"></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'justifyCenter')}><i className="fas fa-align-center"></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'justifyRight')}><i className="fas fa-align-right"></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'insertOrderedList')}><i className="fas fa-list-ol"></i></a>
            <a href="#" onClick={(e) => this.execCmd(e,'insertUnorderedList')}><i className="fas fa-list-ul"></i></a>
          </div>

          <div className="btn_post">
            <button className="share">Post</button>
          </div>
        </div>

        <div className="post_content">
          
          <div className="my-rich-editor" contentEditable="true">
              
          </div>

        </div>

      </div>
    )
    
  }
  
}
