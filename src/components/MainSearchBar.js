import React from 'react';
import SearchBar from './SearchBar';

import './css/MainSearchBar.css'

class MainSearchBar extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      input: "",
    });
  }

  render() {
    return (
        <SearchBar value={this.state.input}
                   inputClass="main-sb-input"
                   iconClass="main-sb-icon"
                   handleInput={this.handleInput}
                   handleSubmit={this.handleSubmit}
        />
    );
  }
}



export default MainSearchBar;
