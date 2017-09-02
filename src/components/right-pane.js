import React from 'react';

class RightPane extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  render(){
    return(
      <div className="right-pane">
        <div className="container">
          <div className="page-title">
            <h2>Design Question 1</h2>
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

export default RightPane;