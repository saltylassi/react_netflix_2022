import { useSetRecoilState } from 'recoil';
import { isModalOpen } from '../atoms/atoms';

const usePosterLink = () => {
  const showHeader = useSetRecoilState(isModalOpen);

  const handleClick = () => {
    showHeader(() => false);
  };

  return { handleClick };
};

export default usePosterLink;
