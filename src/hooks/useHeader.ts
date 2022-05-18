import { useAnimation, useViewportScroll } from 'framer-motion';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IForm {
  keyword: string;
}

const useHeader = () => {
  const [isVisibleSearchInput, setIsVisibleSearchInput] = useState<boolean>(false);
  const inputAnimation = useAnimation();
  const bgAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const { register, handleSubmit } = useForm<IForm>();
  const Navigate = useNavigate();

  useEffect(() => {
    scrollY.onChange(() => {
      scrollY.get() >= 80 ? bgAnimation.start('scroll') : bgAnimation.start('top');
    });
  }, [scrollY, bgAnimation]);

  const handleSearchClick = useCallback(() => {
    inputAnimation.start({
      scaleX: Number(!isVisibleSearchInput),
    });
    setIsVisibleSearchInput((current) => !current);
  }, [inputAnimation, isVisibleSearchInput]);

  const onValid = (data: IForm) => {
    Navigate(`/search?keyword=${data.keyword}`);
  };

  return { inputAnimation, isVisibleSearchInput, handleSearchClick, bgAnimation, register, handleSubmit, onValid };
};

export default useHeader;
