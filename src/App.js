import React, { Component } from 'react';
import eiffel from './toureiffel.png';
import Card from './Card';
import MyDictionary from './dictionary.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { LabelSwitch } from 'material-ui/Switch';
import {createStore} from 'redux';
import './App.css';

var reducer_0 = function (state, action) {
  console.log('reducer_0 was called with state', state, 'and action', action)
}

var store_0 = createStore(reducer_0)
var reducer = function (...args) {
  console.log('Reducer was called with args', args)
}

var actionCreator = function() {
  return {
    type: 'AN_ACTION'
  }
}
console.log('store_0 state after initialization:', store_0.getState())
var reducer_1 = function (state, action) {
  console.log('reducer_1 was called with state', state, 'and action', action)
  if (typeof state === 'undefined') {
    return {}
  }
  return state;
}

var store_1 = createStore(reducer_1)

var reducer_2 = function (state = {}, action) {
  console.log('reducer_2 was called with state', state, 'and action', action)
  return state;
}
var store_2 = createStore(reducer_2)
console.log('store_2 state after initialization:', store_2.getState())

var reducer_3 = function (state = {}, action) {
  console.log('reducer_3 was called with state', state, 'and action', action)
  switch (action.type) {
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      }
    default:
      return state;
  }
}

var store_3 = createStore(reducer_3)

console.log('store_3 state after initialization:', store_3.getState())

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dictionary: MyDictionary,
      isFlipped: false,
      currentIndex: 0,
      checkedFrench: false,
    }
  }

  flipcard() {
    this.setState(({ isFlipped }) => ({ isFlipped: !isFlipped }))
  }

  displayEnglishFirst(){
      return this.state.isFlipped?
        this.state.dictionary[this.state.currentIndex].french:
        this.state.dictionary[this.state.currentIndex].english
  }

  displayFrenchFirst(){
    return this.state.isFlipped?
      this.state.dictionary[this.state.currentIndex].english:
      this.state.dictionary[this.state.currentIndex].french
  }

  displayWord(){
    return this.state.checkedFrench?
      this.displayFrenchFirst():this.displayEnglishFirst()
  }

  getNextCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentIndex < this.state.dictionary.length -1?
      this.setState(({ currentIndex}) => ({ currentIndex: currentIndex +1})):
      this.setState(({ currentIndex}) => ({ currentIndex: 0}))
  }

  getPrevCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentIndex > 0?
      this.setState(({ currentIndex}) => ({ currentIndex: currentIndex -1})):
      this.setState(({ currentIndex}) => ({ currentIndex: this.state.dictionary.length -1}))
    }

  switchLangage(){
    this.setState(({ checkedFrench}) => ({checkedFrench: !checkedFrench}))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={eiffel} className="Applogo" alt="logo" />
            <h2>Welcome to my flashcard app</h2>
          </div>
          <LabelSwitch
             onChange={() => this.switchLangage()}
             label="French"
          />
          <Card
            word= {this.displayWord()}
            onClick={() => this.flipcard()}
          />
          <button className="button" onClick ={() => this.getPrevCard()}>PREVIOUS</button>
          <button className="button" onClick ={() => this.getNextCard()}>NEXT</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
