import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editQuestion} from '../actions/index';

class RightPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageURL: ""
    }
  }
  fileInputHandler(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
        this.setState({ imageURL: [reader.result] })
    }.bind(this);
    console.log(url)
  }

  render(){
    if (!this.props.data.currentquestion) {
      return (
        <div className="right-pane">
          <div className="container">
            <div className="page-title">
              <h2>Please choose a question to design</h2>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className="right-pane">
        <div className="container">
          <div className="page-title">
            <h2>Design Question</h2>
          </div>
          <div className="edit-question">
            <div className="form-group">
              <label className="form-label">Question</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.question}/>
            </div>
            <div className="form-group">
              <label className="form-label">Image</label>
              <div className="custom-file-input-wrapper">
                <input className="custom-file-input" type="file" id="image" onChange={this.fileInputHandler.bind(this)}/>
                <label htmlFor="image">
                  <i className="material-icons">image</i> Choose file
                </label>
                <img className="image-preview" src={this.state.imageURL} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Option 1</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.a : "No option"}/>
            </div>
            <div className="form-group">
              <label className="form-label">Option 2</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.b : "No option"}/>
            </div>
            <div className="form-group">
              <label className="form-label">Option 3</label>
              <input className="form-control" type="text" value={this.props.data.currentquestion.options ? this.props.data.currentquestion.options.c : "No option"}/>
            </div>
          </div>
          <div className="action-block">
            <button className="button-primary"><i className="material-icons">add_circle_outline</i> ADD OPTION</button>
            <button><i className="material-icons">delete_forever</i> REMOVE OPTION</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: state
  };
}
function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      editQuestion: editQuestion
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);