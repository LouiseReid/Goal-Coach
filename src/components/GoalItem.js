import React from 'react';

class GoalItem extends React.Component{
  render(){
    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal
    return(
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span> submitted by <em>{email}</em></span>
      </div>
    )
  }
}

export default GoalItem;
