import React from 'react';
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

export default App;