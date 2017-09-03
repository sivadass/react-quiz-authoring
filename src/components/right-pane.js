import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editQuestion} from '../actions/index';

class RightPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current : {},
      currentId: this.props.currentQuestion.currentquestion
    }
  }
  componentWillReceiveProps(){
    // this.setState({
    //   currentId: this.props.currentQuestion.currentquestion
    // }, function(){
    //   console.log(this.state.currentId);
    // })
    // var result = this.props.currentQuestion.questions.filter(function(v) {
    //   return v.id === this.state.currentId; // Filter out the appropriate one
    // })[0];
    // this.setState({
    //   current : result
    // }, function(){
    //   //console.log(this.state.current.length)
    // })
  }
  render(){
    console.log(this.props.questions);
    return(
      <div className="right-pane">
        <div className="container">
          <div className="page-title">
            <h2>Design Question</h2>
            {this.state.currentId + "Hey"}
          </div>
          <div className="edit-question">
            <div className="form-group">
              <label className="form-label">Question</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">Image</label>
              <div className="custom-file-input-wrapper">
                <input className="custom-file-input" type="file" id="image"/>
                <label htmlFor="image">
                  <i className="material-icons">image</i> Choose file
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Option 1</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">Option 2</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">Option 3</label>
              <input className="form-control" type="text" />
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
    questions: state,
    currentQuestion: state
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