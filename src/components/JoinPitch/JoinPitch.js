import React from 'react';
import './JoinPitch.css';
import '../../grid.css';


export default class JoinPitch extends React.Component{

  render(){
    return(
      <div className="col-4">
        <div className="joinpitch-container">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}
