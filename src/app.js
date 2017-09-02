import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeExpense, addExpense, fetchExpenses} from './actions/index';
const css = require('./stylesheets/style.scss');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
        <h1>Hello</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expense: state
  };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      removeExpense : removeExpense
    }, dispatch)
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(App);