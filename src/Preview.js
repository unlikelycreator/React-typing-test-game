import React from 'react';
import './App.css'

export default (props) => {

  const text = props.text.split('');

  return (
    <div className="preview">
      {
        text.map((s,i) => {
          let color;
          if (i < props.userInput.length) {
            color = s === props.userInput[i] ? '#03fc9d' : '#fc035a';
            var txtcolor = '#000000'
          }
          return <span key={i} style={{backgroundColor: color, color: txtcolor}}>{s}</span>
        })
      }
    </div>
  )
}