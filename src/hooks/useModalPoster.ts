import { useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import apis from '../apis';
import { isModalOpen, sourceGroupID, sourceID } from '../atoms/atoms';
import { UNDEFINED } from '../constants/constants';

const useModalPoster = (type: string) => {
  const scrollInfo = useViewportScroll();
  const setModalOpen = useSetRecoilState(isModalOpen);
  const [targetID, setTargetID] = useRecoilState(sourceID);
  const { isLoading, data } = useQuery(['modalPoster', targetID, type], () => apis.getDetail(type, targetID));
  const [groupID, setGroupID] = useRecoilState(sourceGroupID);

  const handleOverlayClick = () => {
    setModalOpen(() => false);
    setTargetID(() => UNDEFINED);
    setGroupID(() => UNDEFINED);
  };

  return { isLoading, handleOverlayClick, scrollInfo, data, targetID, groupID };
};

export default useModalPoster;
