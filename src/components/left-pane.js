import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewQuestion, editQuestion} from '../actions/index';
import uuid from 'uuid4';

class LeftPane extends React.Component{
  constructor(props){
    super(props);
    this.addQuestion = this.addQuestion.bind(this);
  }
  addQuestion(){
    var maxQuestions = this.props.questions.questions.length + 1;
    var data = {
      id: uuid(),
      question: "New Question " + (maxQuestions++),
    };
    this.props.addNewQuestion(data);
  }
  selectQuestion(id){
    this.props.editQuestion(id);
  }
  
  render(){
    var that = this;
    var renderQuestions = this.props.questions.questions.map(function(item){
      return <li key={item.id} onClick={that.selectQuestion.bind(that, item.id)}>{item.question}</li>;
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
            <button className="button-primary" onClick={this.addQuestion}><i className="material-icons">add_circle_outline</i> ADD QUESTION</button>
            <button><i className="material-icons">delete_forever</i> REMOVE QUESTION</button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    questions: state
  };
}
function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      addNewQuestion: addNewQuestion,
      editQuestion: editQuestion
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);