import React, { Component } from 'react';
import eiffel from './toureiffel.png';
import Card from './Card';
import MyDictionary from './dictionary.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { LabelSwitch } from 'material-ui/Switch';
import './App.css';


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
    if(this.state.isFlipped){
      return this.state.dictionary[this.state.currentIndex].french
    }

    return this.state.dictionary[this.state.currentIndex].english
  }

  displayFrenchFirst(){
    if(this.state.isFlipped){
      return this.state.dictionary[this.state.currentIndex].english
    }

    return this.state.dictionary[this.state.currentIndex].french
  }

  displayWord(){
    if(this.state.checkedFrench){
      return this.displayFrenchFirst()

    }
    else{
     return this.displayEnglishFirst()
    }
  }


  getNextCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    if(this.state.currentIndex < this.state.dictionary.length -1){
      this.setState(({ currentIndex}) => ({ currentIndex: currentIndex +1}))
    }
    else {
        this.setState(({ currentIndex}) => ({ currentIndex: 0}))
    }
  }

  getPrevCard(){
    this.setState(({ isFlipped }) => ({ isFlipped: false }))
    if(this.state.currentIndex > 0){
      this.setState(({ currentIndex}) => ({ currentIndex: currentIndex -1}))
    }
    else {
        this.setState(({ currentIndex}) => ({ currentIndex: this.state.dictionary.length -1}))
    }
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
