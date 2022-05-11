import { useState } from 'react';

const useSlider = () => {
  const [idx, setIdx] = useState<number>(0);

  const increaseIdx = () => setIdx((prev) => prev + 1);

  return { idx, increaseIdx };
};

export default useSlider;
