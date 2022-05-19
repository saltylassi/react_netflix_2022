import { useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import apis from '../apis';
import { isModalOpen, sourceGroupID, sourceID } from '../atoms/atoms';

const useModalPoster = (type: string) => {
  const navigate = useNavigate();
  const scrollInfo = useViewportScroll();
  const setModalOpen = useSetRecoilState(isModalOpen);
  const targetID = useRecoilValue(sourceID);
  const { isLoading, data } = useQuery(['modalPoster', targetID, type], () => apis.getDetail(type, targetID));
  const groupID = useRecoilValue(sourceGroupID);

  const handleOverlayClick = () => {
    setModalOpen((prev) => false);
    navigate('/');
  };

  return { isLoading, handleOverlayClick, scrollInfo, data, targetID, groupID };
};

export default useModalPoster;
