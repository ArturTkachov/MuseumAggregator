import React, { FC, ChangeEventHandler, FormEventHandler } from 'react';
import './css/SearchBar.css';

interface Props {
  size: 'small' | 'normal';
  value: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FC<Props> = (props) => {
  const formClass = `search-bar ${props.size}`;

  return (
    <form className={formClass} onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        aria-label="search input"
      />
      <button name="search button" aria-label="search button" />
    </form>
  );
};

export default SearchBar;
