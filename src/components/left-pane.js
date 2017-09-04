import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewQuestion, selectQuestion, removeQuestion} from '../actions/index';
import uuid from 'uuid4';

class LeftPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      removeMode: false
    }
    this.addQuestion = this.addQuestion.bind(this);
    this.toggleRemoveMode = this.toggleRemoveMode.bind(this);
  }
  addQuestion(){
    var maxQuestions = this.props.data.questions.length + 1;
    var data = {
      id: uuid(),
      question: "New Question " + (maxQuestions++),
    };
    this.props.addNewQuestion(data);
  }
  selectQuestion(question){
    this.props.selectQuestion(question);
  }
  removeQuestion(id){
    this.props.removeQuestion(id);
  }
  toggleRemoveMode(){
    this.setState({
      removeMode: !this.state.removeMode
    })
  }
  
  render(){
    var that = this;
    console.log(this.props.data);
    var renderQuestions = this.props.data.questions.map(function(item) {
      return(
        <li key={item.id} className={that.state.removeMode ? "remove-mode-active" : ""}>
          <a href="#" className="question-item" onClick={that.selectQuestion.bind(that, item)}>
            {item.question}</a>
          <a href="#" className="remove-question" onClick={that.removeQuestion.bind(that, item.id)} title="Remove this question">
            <i className="material-icons">close</i>
          </a>
        </li>
      )
    })
    return(
      <div className="left-pane">
        <div className="container">
          <div className="page-title">
            <h2>Select Your Questions</h2>
          </div>
          <div className="questions">
            <ul>
              {renderQuestions}
            </ul>
          </div>
          <div className="action-block">
            <button className={that.state.removeMode ? "button-primary disabled" : "button-primary"} onClick={this.addQuestion}><i className="material-icons">add_circle_outline</i> ADD QUESTION</button>
            <button className={that.state.removeMode ? "remove-button-active" : ""} onClick={this.toggleRemoveMode}><i className="material-icons">delete_forever</i> {that.state.removeMode ? "DONE REMOVING" : "REMOVE QUESTIONS"}</button>
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
      addNewQuestion: addNewQuestion,
      selectQuestion: selectQuestion,
      removeQuestion: removeQuestion
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);