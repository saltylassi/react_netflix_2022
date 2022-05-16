import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { constants, padding } from '../constants/constants';
import useSlider from '../hooks/useSlider';
import { utils } from '../utils';

interface IProps {
  imgPaths: string[];
  totalLength: number;
  titles: Array<{ title: string }>;
}

const ImageSlider: React.FC<IProps> = ({ imgPaths, totalLength, titles }) => {
  const { idx, increaseIdx, handleExit } = useSlider(totalLength);

  return (
    <Container>
      <AnimatePresence initial={false} onExitComplete={handleExit}>
        <Wrapper
          key={idx}
          variants={animationVariants.WrapperVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
        >
          {imgPaths.slice(constants.sliderOffset * idx, constants.sliderOffset * (idx + 1)).map((path, index) => {
            return (
              <Item
                key={path}
                bgPath={utils.makeImagePath(path, 'w500')}
                variants={animationVariants.scaleVariants}
                initial="normal"
                whileHover="hover"
              >
                <Info variants={animationVariants.infoVariants}>
                  <InfoText>{titles[index].title}</InfoText>
                </Info>
              </Item>
            );
          })}
        </Wrapper>
      </AnimatePresence>
      <ArrowButton onClick={increaseIdx}>{'>'}</ArrowButton>
    </Container>
  );
};

export default ImageSlider;

const Container = styled.div`
  position: relative;
  top: -15rem;
  display: flex;
`;

const Wrapper = styled(motion.div)`
  //TODO 이중 스크롤바 해결
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1);
  grid-column-gap: 1rem;
  padding: 0 ${padding.hPadding};
  position: absolute;
  width: 100%;
`;

const Item = styled(motion.div)<{ bgPath: string }>`
  position: relative;
  height: 10rem;
  background-image: url(${(props) => props.bgPath});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.2rem 1.2rem;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
`;

const InfoText = styled.span`
  color: ${(props) => props.theme.white.lighter};
  font-weight: 700;
  font-size: 1rem;
`;

const ArrowButton = styled.div`
  position: absolute;
  right: 0.1rem;
  height: 100%;
  font-size: 5rem;
  background-color: red;
`;

const animationVariants = {
  WrapperVariants: {
    hidden: {
      x: constants.innerWidth + 16,
    },
    visible: { x: 0 },
    exit: { x: 0 - constants.innerWidth - 16 },
  },

  scaleVariants: {
    normal: {
      scale: 1,
      transition: {
        type: 'tween',
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        delay: 0.15,
        duration: 0.15,
        type: 'tween',
      },
    },
  },

  infoVariants: {
    hover: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.1,
      },
    },
  },
};
