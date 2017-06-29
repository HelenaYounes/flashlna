import React, {Component} from 'react';


class Card extends Component {


  render(){
    return(
      <div className = "cardArea" onKeyPress = {this.props.onKeyPress}>
        <div className = "card" onClick = {this.props.onClick}>
          <div className = "cardContent" >
            <b>{this.props.word}</b>
          </div>
        </div>
      </div>

    );
  }
}

export default Card;
