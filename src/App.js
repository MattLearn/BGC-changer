import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={value: ''};
    this.update=this.update.bind(this);
  }

  componentDidMount()
  {
    var color ='rgb(255,255,255)';
    document.body.style.backgroundColor = color;
  }

  update(e){
    this.setState({
      red: this.refs.red.refs.input.value,
      green: this.refs.green.refs.input.value,
      blue: this.refs.blue.refs.input.value
    });
    var color ='rgb('+this.state.red+','+this.state.green+','+this.state.blue+')';
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div>
        <label className="slider">R : </label>
        <Slider ref="red" update={this.update}/>
        <label className="slider"> {this.state.red} </label>
        <br/>
        <label className="slider"> G : </label>
        <Slider ref="green" update={this.update}/>
        <label className="slider">{this.state.green}</label>
        <br/>
        <label className="slider"> B : </label>
        <Slider ref="blue" update={this.update}/>
        <label className="slider">{this.state.blue}</label>
      </div>
    );
  }

}


class Slider extends Component{
  render(){
    return(
      <input ref="input" type="range" min="0" max="255" onChange={this.props.update}/>
      );
  }
}

export default App;
