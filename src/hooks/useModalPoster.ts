import { useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useMatch, useNavigate } from 'react-router-dom';
import apis from '../apis';

const useModalPoster = (type: string, id: string) => {
  const movieMatch = useMatch('/movies/:id');
  const navigate = useNavigate();
  const scrollInfo = useViewportScroll();
  const { isLoading, data } = useQuery(['modalPoster', id, type], () => apis.getDetail(type, id));

  const handleClick = () => {
    navigate('/');
  };

  return { movieMatch, handleClick, scrollInfo, data };
};

export default useModalPoster;
