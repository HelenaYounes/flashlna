import React, { Component } from 'react';
import eiffel from './toureiffel.png';
import Card from './Card';
import Toggle from 'react-toggle';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dictionary:[
        {
          english: "cat ",
          french: "le chat",
        },
        {
          english: "dog ",
          french: "le chien",
        },
        {
      english:"To clean",
      french:"Nettoyer",
    },
    {
      english:"To drive",
      french:"Conduire",
    },
    {
      english:"To tidy",
      french:"Ranger",
    },
    {
      english:"Alarm clock",
      french:"Un reveil",
    },
    {
      english:"Shoe",
      french:"Une chaussure",
    },
    {
      english:"Trousers",
      french:"Un pantalon",
    },
    {
      english:"sweater",
      french:"Un pull",
    },
    {
      english:"A cap",
      french:"Une casquette",
    },
    {
      english:"A ring",
      french:"Une bague",
    },
    {
      english:"A watch",
      french:"Une montre",
    },
    {
      english:"Door",
      french:"Une porte",
    },
    {
      english:"Window",
      french:"Une fenêtre",
    },
    {
      english:"Bird",
      french:"Un oiseau",
    },
    {
      english:"Dog",
      french:"Un chien",
    },
    {
      english:"Hello",
      french:"Bonjour",
    },
    {
      english:"How are you?",
      french:"Comment vas tu?",
    },
    {
      english:"How are you?",
      french:"Comment allez vous?",
    },
    {
      english:"Please",
      french:"S'il te plaît",
    },
    {
      english:"Please",
      french:"S'il vous plaît",
    },
    {
      english:"Dog",
      french:"Un chien",
    },
    {
      english:"You are welcome",
      french:"De rien",
    },
    {
      english:"Welcome",
      french:"Bienvenue",
    },
    {
      english:"See you later",
      french:"A plus tard",
    },
    {
      english:"See you tomorrow",
      french:"A demain",
    },
    {
      english:"Goodbye",
      french:"Au revoir",
    },
    {
      english:"There is",
      french:"Il y a",
    },
    {
      english:"Ago",
      french:"Il y a",
    },
    {
      english:"How are you doing",
      french:"Ça va bien?",
    },
    {
      english:"Agreed",
      french:"D'accord",
    },
    {
      english:"I agree",
      french:"Je suis d'accord",
    },
      ],
      isFlipped: false,
      currentIndex: 0,
      englishFirst: true,

    }

  }


  handleKeyPress(e) {


      alert('key pressed')

  }
  flipcard() {
    this.setState(({ isFlipped }) => ({ isFlipped: !isFlipped }))
  }

  displayWord(){
    if(this.state.isFlipped){
      return this.state.dictionary.french
    }

    return this.state.dictionary.english
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

  changeLangage(){
    this.setState(({englishFirst}) => ({englishFirst: !englishFirst}))

  }



  render() {

    return (



      <div className="App" onKeyPress = {(e) => this.onKeyPress(e)}>
        <div className="App-header">
          <img src={eiffel} className="Applogo" alt="logo" />
          <h2>Welcome to my flashcard app</h2>
        </div>
        <Toggle className="toggle" onChange={() => this.changeLangage()}></Toggle>


        <Card
        word= {(this.state.isFlipped)? this.state.dictionary[this.state.currentIndex].french :
          this.state.dictionary[this.state.currentIndex].english}
        onClick={() => this.flipcard()}
        onKeyPress = {(e) => this.onKeyPress(e)}
        />
        <button className="button" onClick ={() => this.getPrevCard()}>PREVIOUS</button>

        <button className="button" onClick ={() => this.getNextCard()}>NEXT</button>

      </div>
    );
  }
}

export default App;
