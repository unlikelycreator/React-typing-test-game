import React from 'react';
import './App.css'
export default (props) => {

  if (props.symbols !== 0 && props.sec !== 0 || props.finished === false) {
    const wpm = (props.symbols/5) / (props.sec/60);
    return (
      <div><p className="speed">{Math.round(wpm)} wpm</p></div>
    )
  }
  
  return null;
}