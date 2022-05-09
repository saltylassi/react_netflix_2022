import { useState } from 'react';

const useHeader = () => {
  const [isVisibleSearchInput, setIsVisibleSearchInput] = useState<boolean>(false);
  const handleSearchClick = () => {
    setIsVisibleSearchInput((current) => !current);
  };

  return { isVisibleSearchInput, handleSearchClick };
};

export default useHeader;
