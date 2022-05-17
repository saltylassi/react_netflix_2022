import { useState } from 'react';
import { constants } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const useSlider = (totalLength: number) => {
  const [idx, setIdx] = useState<number>(0);
  const [progress, setProgress] = useState<boolean>(false);
  const navigate = useNavigate();

  const increaseIdx = () => {
    if (progress) {
      return;
    } else {
      setProgress(() => true);
      setIdx((prev) => (prev + 1 === Math.floor(totalLength / constants.sliderOffset) ? 0 : prev + 1));
    }
  };

  const handleExit = () => setProgress(() => false);

  const handleClick = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return { idx, increaseIdx, handleExit, handleClick };
};

export default useSlider;
