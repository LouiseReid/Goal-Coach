import React from 'react';
import { goalRef } from '../firebase';

class AddGoal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal(){
    console.log('this.state', this.state);
    goalRef.push({email: 'test@test.com', title: this.state.title})
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add a goal"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
            >
              Submit
            </button>
          </div>
        </div>
      )
    }
  }

  export default AddGoal
