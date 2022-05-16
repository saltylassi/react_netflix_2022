import { useState } from 'react';
import { constants } from '../constants/constants';

const useSlider = (totalLength: number) => {
  const [idx, setIdx] = useState<number>(0);
  const [progress, setProgress] = useState<boolean>(false);

  console.log(idx);

  const increaseIdx = () => {
    if (progress) {
      return;
    } else {
      setProgress(() => true);
      setIdx((prev) => (prev + 1 === Math.floor(totalLength / constants.sliderOffset) ? 0 : prev + 1));
    }
  };

  const handleExit = () => setProgress(() => false);

  return { idx, increaseIdx, handleExit };
};

export default useSlider;
