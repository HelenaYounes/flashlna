import React, {Component} from 'react';


class List extends Component {


  render(){
    console.log(this.props);
    console.log("msg")
    return(
      <div className = "theList">
        <h2><b>{this.props.listName}</b></h2>
      </div>
    );
  }
}

export default List;
