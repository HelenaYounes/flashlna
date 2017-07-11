import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { LabelSwitch } from 'material-ui/Switch';
//import {createStore} from 'redux';
//import { ADD_CARD, REMOVE_CARD } from './actionTypes'
import './App.css';
import eiffel from './toureiffel.png';
import Card from './Card';
import MyLists from './lists.js';
import List from './List.js';

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
      lists: MyLists,
      isFlipped: false,
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
        this.state.lists[this.state.currentListIndex].words[this.state.currentListWordIndex].french:
        this.state.lists[this.state.currentListIndex].words[this.state.currentListWordIndex].english
  }

  displayFrenchFirst(){
    return this.state.isFlipped?
      this.state.lists[this.state.currentListIndex].words[this.state.currentListWordIndex].english:
      this.state.lists[this.state.currentListIndex].words[this.state.currentListWordIndex].french
  }



  displayWord(){
    return this.state.checkedFrench?
      this.displayFrenchFirst():this.displayEnglishFirst()
  }

  getNextCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentListWordIndex < this.state.lists[this.state.currentListIndex].words.length -1?
      this.setState(({ currentListWordIndex}) => ({ currentListWordIndex: currentListWordIndex +1})):
      this.setState(({ currentListWordIndex}) => ({ currentListWordIndex: 0}))
  }

  getPrevCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    this.state.currentListWordIndex > 0?
      this.setState(({ currentListWordIndex}) => ({ currentListWordIndex: currentListWordIndex -1})):
      this.setState(({ currentListWordIndex}) => ({ currentListWordIndex: this.state.dictionary.length -1}))
    }

  switchLangage(){
    this.setState(({ checkedFrench}) => ({checkedFrench: !checkedFrench}))
  }

  showList(index){
    debugger;
    this.setState(({currentListIndex}) => ({currentListIndex: index}))
    this.setState(({currentListWordIndex}) => ({currentListWordIndex: 0}))
    this.displayWord()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="container">
            <div className="App-header">
              <img src={eiffel} className="Applogo" alt="logo" />
              <h2>Ongi etorri</h2>
            </div>
            <LabelSwitch
               className ="switch"
               onChange={() => this.switchLangage()}
               label="French"
            />
              <div className = "myLists">
                {this.state.lists.map((item, index) => <button key= {index} onClick={() => this.showList(index)}>{this.state.lists[index].name} </button>)}
              </div>
              <div className  ="flashcardArea">
              <List listName= {this.state.lists[this.state.currentListIndex].name}/>
              <Card
                word= {this.displayWord()}
                onClick={() => this.flipcard()}
              />
              <button className="button" onClick ={() => this.getPrevCard()}>PREVIOUS</button>
              <button className="button" onClick ={() => this.getNextCard()}>NEXT</button>
            </div>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
