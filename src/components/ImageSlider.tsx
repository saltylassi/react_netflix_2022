import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { constants, padding } from '../constants/constants';
import useSlider from '../hooks/useSlider';
import { utils } from '../utils';

interface IProps {
  mainTitle: string;
  imgPaths: string[];
  totalLength: number;
  titles: Array<{ title: string }>;
  ids: Array<number>;
  handleID: (id: string) => void;
}

const ImageSlider: React.FC<IProps> = ({ imgPaths, totalLength, titles, ids, mainTitle, handleID }) => {
  const { idx, increaseIdx, handleExit, handleClick } = useSlider(totalLength);

  return (
    <Container>
      <MainTitleContainer>
        <MainTitle>{mainTitle}</MainTitle>
      </MainTitleContainer>
      <AnimatePresence initial={false} onExitComplete={handleExit}>
        <Wrapper
          key={idx}
          variants={animationVars.WrapperVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
        >
          {imgPaths.slice(constants.sliderOffset * idx, constants.sliderOffset * (idx + 1)).map((path, index) => {
            return (
              <Item
                layoutId={path + ids[index].toString()}
                key={path + ids[index].toString()}
                bgPath={utils.makeImagePath(path, 'w500')}
                variants={animationVars.scaleVariants}
                initial="normal"
                whileHover="hover"
                onClick={() => {
                  handleClick(ids[index]);
                  handleID(ids[index].toString());
                }}
              >
                <Info variants={animationVars.infoVariants}>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20vh;
  margin: 2rem 0;
`;

const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  margin: 1rem 1rem;
`;

const MainTitle = styled.span``;

const Wrapper = styled(motion.div)`
  //TODO 이중 스크롤바 해결
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1);
  grid-column-gap: 1rem;
  padding: 0 ${padding.hPadding};
  position: absolute;
  width: 100%;
  top: 4rem;
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
  cursor: pointer;
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
  top: 5rem;
`;

const animationVars = {
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
