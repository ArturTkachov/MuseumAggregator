import React from 'react';
import SearchBar from '../../components/SearchBar';

import '../css/header/MainSearchBar.css'

class MainSearchBar extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <SearchBar value={this.state.input}
                 isTall={true}
                 inputClass="main-sb-input"
                 handleInput={this.handleInput}
                 handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default MainSearchBar;
