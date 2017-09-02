import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeExpense, addExpense, fetchExpenses} from './actions/index';
const css = require('./stylesheets/style.scss');

import LeftPane from './components/left-pane';
import RightPane from './components/right-pane';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="main">
        <LeftPane />
        <RightPane/>
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