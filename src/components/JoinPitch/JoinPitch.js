import React from 'react';
import './JoinPitch.css';
import '../../grid.css';


export default class JoinPitch extends React.Component{

  render(){
    return(
      <div className="col-4">
        <div className="joinpitch-container">
          <p className= "joinpitch-content">{this.props.content}</p>
        </div>
      </div>
    )
  }
}
