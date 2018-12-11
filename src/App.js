import React, { Component } from 'react';
import './App.css';
import MagazineItem from './components/MagazineItem'
import ControlledInput from './components/ControlledInput'

const magazines = [
  {
    title: 'Magazine 1',
    year: 2017
  },
  {
    title: 'Magazine 2',
    year: 2020
  }
]

localStorage.setItem('magazines', JSON.stringify(magazines));

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      magazines: []
    }
  }

  getMagazines() {
    const magazines = JSON.parse(localStorage.getItem('magazines'));
    console.log(magazines);
    this.setState({magazines: magazines})
  }
  
  componentWillMount(){
    this.getMagazines();
  }

  render() {
    return (
      <div className="App">
        <h1>Magazines</h1>
        {
          this.state.magazines.map(x => {
            return(
                <MagazineItem {...x}/>
            )
          })
        }
        <ControlledInput />
      </div>
    );
  }
}

export default App;