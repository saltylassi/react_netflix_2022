import { useMatch } from 'react-router-dom';

const useNav = (path: string) => {
  const match = useMatch(path);

  return { match };
};

export default useNav;
