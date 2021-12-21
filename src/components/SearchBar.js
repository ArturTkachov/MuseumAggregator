import React from 'react';
import IconButton from './IconButton'


import './css/SearchBar.css'

const SearchBar = (props) => {
  return (
    <form className="search-bar" onSubmit={props.handleSubmit}>
      <InputBar value={props.value} inputClass={props.inputClass} handleInput={props.handleInput}/>
      <IconButton submit={true} className={props.buttonClass}/>
    </form>
  );
}

export default SearchBar;

const InputBar = (props) => {
  const className = `input-bar ${props.inputClass || ""}`;
  return (
    <input className={className} type="text" value={props.value} onChange={props.handleInput}/>
  );
};

