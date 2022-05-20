import { useCallback, useEffect, useState, useRef } from 'react';
import { constants, UNDEFINED } from '../constants/constants';
// import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isModalOpen, sourceGroupID, sourceID } from '../atoms/atoms';

const useSlider = (totalLength: number, from: string) => {
  const [idx, setIdx] = useState<number>(0);
  const progress = useRef<Boolean>(false);
  // const navigate = useNavigate();
  const setId = useSetRecoilState(sourceID);
  const setGroupID = useSetRecoilState(sourceGroupID);
  const setModalOpen = useSetRecoilState(isModalOpen);
  const [moveTo, setMoveTo] = useState<string>(UNDEFINED);

  const increaseIdx = useCallback(() => {
    progress.current = true;
    setIdx((prev) => (prev + 1 >= Math.floor(totalLength / constants.sliderOffset) ? 0 : prev + 1));
  }, [totalLength]);

  const decreaseIdx = useCallback(() => {
    progress.current = true;
    setIdx((prev) => (prev <= 0 ? Math.floor(totalLength / constants.sliderOffset) - 1 : prev - 1));
  }, [totalLength]);

  const handleExit = useCallback(() => {
    progress.current = false;
    setMoveTo(() => UNDEFINED);
  }, []);

  const handleClick = useCallback(
    (from: string, id: number) => {
      setId(() => id.toString());
      setGroupID(() => from);
      setModalOpen(() => true);
    },
    [setId, setGroupID, setModalOpen]
  );

  const handleMoveTo = useCallback((direction: 'right' | 'left') => {
    setMoveTo(() => direction);
  }, []);

  useEffect(() => {
    if (progress.current) {
      return;
    } else {
      if (moveTo === 'right') {
        increaseIdx();
      } else if (moveTo === 'left') {
        decreaseIdx();
      } else {
        return;
      }
    }
  }, [moveTo, increaseIdx, decreaseIdx]);

  return { idx, handleExit, handleClick, handleMoveTo, moveTo };
};

export default useSlider;
