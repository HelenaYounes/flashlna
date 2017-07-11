import React, {Component} from 'react';


class MyList extends Component {


  render(){
    return(
      <div className = "theList">
        <h2><b>{this.props.listName}</b></h2>
      </div>
    );
  }
}

export default List;
