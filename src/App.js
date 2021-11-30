import React, { Component } from 'react';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText';
import './App.css'

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

class App extends Component {

  state = initialState;

  onRestart = () => {
    this.setState(initialState)
  }

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v)
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  render() {
    return (
      <div className="body">
        <header className="header">
          <h2>TypeX</h2>
          <a className="btng" href="https://github.com/unlikelycreator">Github</a>
        </header>
        <div className="wrapper">
        <Speed sec={this.state.sec} symbols={this.state.symbols}/>
          <div className="content">
            <Preview text={this.state.text} userInput={this.state.userInput}/>
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="txtarea form-control"
              placeholder="Start typing..."
              readOnly={this.state.finished}
            ></textarea>
            <div className="text-right">
              <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
