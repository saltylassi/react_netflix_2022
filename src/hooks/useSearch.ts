import { useLocation } from 'react-router-dom';

const useSearch = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');

  return { keyword };
};

export default useSearch;
