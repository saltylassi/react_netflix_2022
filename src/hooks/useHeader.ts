import { useAnimation, useViewportScroll } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isModalOpen } from '../atoms/atoms';

interface IForm {
  keyword: string;
}

const useHeader = () => {
  const [isVisibleSearchInput, setIsVisibleSearchInput] = useState<boolean>(false);
  const inputAnimation = useAnimation();
  const bgAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const Navigate = useNavigate();
  const searchMatch = useMatch('/search');

  const modalOpen = useRecoilValue(isModalOpen);

  useEffect(() => {
    scrollY.onChange(() => {
      scrollY.get() >= 80 ? bgAnimation.start('scroll') : bgAnimation.start('top');
    });
  }, [scrollY, bgAnimation]);

  useEffect(() => {
    if (!searchMatch) {
      setValue('keyword', '');
      inputAnimation.start({ scaleX: 0 });
      setIsVisibleSearchInput((current) => !current);
    }
  }, [searchMatch, setValue, inputAnimation, setIsVisibleSearchInput]);

  const handleSearchClick = useCallback(() => {
    inputAnimation.start({
      scaleX: Number(!isVisibleSearchInput),
    });
    setIsVisibleSearchInput((current) => !current);
  }, [inputAnimation, isVisibleSearchInput]);

  const onValid = (data: IForm) => {
    Navigate(`/search?keyword=${data.keyword}`);
  };

  return {
    inputAnimation,
    isVisibleSearchInput,
    handleSearchClick,
    bgAnimation,
    register,
    handleSubmit,
    onValid,
    modalOpen,
  };
};

export default useHeader;
