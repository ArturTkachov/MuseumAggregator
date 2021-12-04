import React from 'react';
import IconButton from './IconButton'

import searchIcon from '../assets/icons/white/searchWhite.svg';

import './css/SearchBar.css'

function SearchBar(props) {
  return (
    <form className="search-bar" onSubmit={props.handleSubmit}>
      <InputBar value={props.value} inputClass={props.inputClass} handleInput={props.handleInput}/>
      <IconButton submit={true} iconSrc={searchIcon} iconClass={props.iconClass}/>
    </form>
  );
}

export default SearchBar;

function InputBar(props) {
  const className = `input-bar ${props.inputClass || ""}`;
  return (
    <input className={className} type="text" value={props.value} onChange={props.handleInput}/>
  );
}


