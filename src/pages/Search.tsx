import React from 'react';
import SearchResult from '../components/SearchResult';
import useSearch from '../hooks/useSearch';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}
const Search: React.FC<IProps> = () => {
  const { keyword } = useSearch();

  return (
    <BodyLayout>
      <SearchResult title="Movies" keyword={keyword || ''} />
      <SearchResult title="TV Shows" keyword={keyword || ''} />
    </BodyLayout>
  );
};

export default Search;
