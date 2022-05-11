import { useAnimation, useViewportScroll } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

const useHeader = () => {
  const [isVisibleSearchInput, setIsVisibleSearchInput] = useState<boolean>(false);
  const inputAnimation = useAnimation();
  const bgAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

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

  return { inputAnimation, isVisibleSearchInput, handleSearchClick, bgAnimation };
};

export default useHeader;
