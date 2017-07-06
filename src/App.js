import React, { Component } from 'react';
import eiffel from './toureiffel.png';
import Card from './Card';
import MyDictionary from './dictionary.js';
import MyLists from './lists.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { LabelSwitch } from 'material-ui/Switch';
import {createStore} from 'redux';
//import { ADD_CARD, REMOVE_CARD } from './actionTypes'
import './App.css';

// var reducer = function (state = 0, action) {
//   console.log('reducer_3 was called with state', state, 'and action', action)
//   switch (action.type) {
//     case 'ADD_CARD':
//       return {
//         state +1 ,
//         message: action.value
//       }
//     case 'REMOVE_CARD':
//       return {
//         state -1 ,
//         message: action.value
//       }
//     default:
//       return state;
//   }
// }
//
// var store = createStore(reducer)

//console.log('store state after initialization:', store.getState())

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dictionary: MyDictionary,
      lists: MyLists,
      isFlipped: false,
      currentDicoIndex: 0,
      checkedFrench: false,
      currentListIndex: 0,
      currentListWordIndex: 0,


    }
  }


  flipcard() {
    this.setState(({ isFlipped }) => ({ isFlipped: !isFlipped }))
  }

  displayEnglishFirst(){
      return this.state.isFlipped?
        this.state.dictionary[this.state.currentDicoIndex].french:
        this.state.dictionary[this.state.currentDicoIndex].english
  }

  displayFrenchFirst(){
    return this.state.isFlipped?
      this.state.dictionary[this.state.currentDicoIndex].english:
      this.state.dictionary[this.state.currentDicoIndex].french
  }

  displayWord(){
    return this.state.checkedFrench?
      this.displayFrenchFirst():this.displayEnglishFirst()
  }

  getNextCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentDicoIndex < this.state.dictionary.length -1?
      this.setState(({ currentDicoIndex}) => ({ currentDicoIndex: currentDicoIndex +1})):
      this.setState(({ currentDicoIndex}) => ({ currentDicoIndex: 0}))
  }

  getPrevCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentDicoIndex > 0?
      this.setState(({ currentDicoIndex}) => ({ currentDicoIndex: currentDicoIndex -1})):
      this.setState(({ currentDicoIndex}) => ({ currentDicoIndex: this.state.dictionary.length -1}))
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
