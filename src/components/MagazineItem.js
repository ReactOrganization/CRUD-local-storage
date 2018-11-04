import React, { Component } from 'react';
import './../App.css';

class MagazineItem extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {title, year} = this.props;
    
    return(
      <div key={title}>{title} {year}</div>
    )
  }
}

export default MagazineItem