import React from 'react';
import { SearchBarWrapper, SearchInput } from './SearchBarStyle';

const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <SearchInput
        type='text'
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={event => props.onValueChange(event.target.value)}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
