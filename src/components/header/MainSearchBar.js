import React from 'react';
import SearchBar from '../SearchBar';

class MainSearchBar extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <SearchBar size="normal" value={this.state.value}
                 handleChange={this.handleChange}
                 handleSubmit={this.handleSubmit}/>
    );
  }
}

export default MainSearchBar;
