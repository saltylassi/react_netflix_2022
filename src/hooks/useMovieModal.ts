import { useViewportScroll } from 'framer-motion';
import { useMatch, useNavigate } from 'react-router-dom';

const useMovieModal = () => {
  const movieMatch = useMatch('/movies/:id');
  const navigate = useNavigate();
  const scrollInfo = useViewportScroll();

  const handleClick = () => {
    navigate('/');
  };

  return { movieMatch, handleClick, scrollInfo };
};

export default useMovieModal;
