import React from 'react';
import { MainText } from './MainText/MainText';
import { SearchInput } from './SearchInput/SearchInput';
import { Filters } from './Filters/Filters';

export const Main = () => {
  return (
    <div>
      <MainText />
      <SearchInput />
      <Filters />
    </div>
  );
};
