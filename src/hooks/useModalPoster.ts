import { useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import apis from '../apis';
import { isModalOpen } from '../atoms/atoms';

const useModalPoster = (type: string, id: string) => {
  const navigate = useNavigate();
  const scrollInfo = useViewportScroll();
  const { isLoading, data } = useQuery(['modalPoster', id, type], () => apis.getDetail(type, id));
  const setModalOpen = useSetRecoilState(isModalOpen);

  const handleOverlayClick = () => {
    setModalOpen((prev) => false);
    navigate('/');
  };

  return { isLoading, handleOverlayClick, scrollInfo, data };
};

export default useModalPoster;
