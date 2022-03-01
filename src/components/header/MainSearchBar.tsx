import React, {
  FC,
  useState,
  ChangeEventHandler,
  FormEventHandler,
} from 'react';
import SearchBar from '../SearchBar';
import { useNavigate } from 'react-router-dom';

const MainSearchBar = React.memo<FC>(() => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setValue('');
    if (!value) return;
    navigate(`./search/${value}`);
  };

  return (
    <SearchBar
      size="normal"
      value={value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
});

export default MainSearchBar;
