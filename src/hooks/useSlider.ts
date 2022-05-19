import { useState } from 'react';
import { constants } from '../constants/constants';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isModalOpen, sourceGroupID, sourceID } from '../atoms/atoms';

const useSlider = (totalLength: number, from: string) => {
  const [idx, setIdx] = useState<number>(0);
  const [progress, setProgress] = useState<boolean>(false);
  const navigate = useNavigate();
  const setId = useSetRecoilState(sourceID);
  const setGroupID = useSetRecoilState(sourceGroupID);
  const setModalOpen = useSetRecoilState(isModalOpen);

  const increaseIdx = () => {
    if (progress) {
      return;
    } else {
      setProgress(() => true);
      setIdx((prev) => (prev + 1 === Math.floor(totalLength / constants.sliderOffset) ? 0 : prev + 1));
    }
  };

  const handleExit = () => setProgress(() => false);

  const handleClick = (from: string, id: number) => {
    setId(() => id.toString());
    setModalOpen(() => true);
    setGroupID(() => from);
    navigate(`/movies/${id}`);
  };

  return { idx, increaseIdx, handleExit, handleClick };
};

export default useSlider;
