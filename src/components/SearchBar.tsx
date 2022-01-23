import React, {FC} from 'react';
import './css/SearchBar.css'

interface Props{
  size: "small" | "normal",
  value: string,
  handleSubmit: () => void,
  handleChange: () => void
}

const SearchBar:FC<Props> = (props) => {
  const formClass = `search-bar ${props.size}`;

  return (
    <form className={formClass} onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange}/>
      <button/>
    </form>
  );
};

export default SearchBar;
