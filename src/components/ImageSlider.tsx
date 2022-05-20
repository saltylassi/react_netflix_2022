import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { constants, padding } from '../constants/constants';
import { IMovieResult } from '../hooks/useHome';
import useSlider from '../hooks/useSlider';
import { ITVResult } from '../hooks/useTV';
import { utils } from '../utils';

interface IProps<T> {
  mainTitle: string;
  results: T[];
}

const ImageSlider: React.FC<IProps<IMovieResult | ITVResult>> = ({ mainTitle, results }) => {
  const { idx, handleExit, handleClick, handleMoveTo, moveTo } = useSlider(results.length, mainTitle);

  // increase시 animation 방향 박살
  // 이미 렌더링된놈이 문제
  // leftBtn을 없애거나 dynamic value 가능 여부 확인

  // 클릭 시 direction을 변경(setState)
  // direction 변동 시 direction대로 이동(useEffect)

  return (
    <Container>
      <MainTitleContainer>
        <MainTitle>{mainTitle}</MainTitle>
      </MainTitleContainer>

      <ArrowButton
        onClick={() => {
          handleMoveTo('left');
        }}
        position={'left'}
      >
        {'<'}
      </ArrowButton>
      <AnimatePresence initial={false} onExitComplete={handleExit}>
        <Wrapper
          key={idx}
          variants={animationVars.WrapperVariants}
          custom={moveTo}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
        >
          {results.slice(constants.sliderOffset * idx, constants.sliderOffset * (idx + 1)).map((result) => {
            return (
              <Item
                layoutId={`${mainTitle}-${result.id}`}
                key={result.poster_path + result.id.toString()}
                bgPath={utils.makeImagePath(result.poster_path, 'w500')}
                variants={animationVars.scaleVariants}
                initial="normal"
                whileHover="hover"
                onClick={() => {
                  handleClick(mainTitle, result.id);
                }}
              >
                <Info variants={animationVars.infoVariants}>
                  <InfoText>{'title' in result ? result.title : result.name}</InfoText>
                </Info>
              </Item>
            );
          })}
        </Wrapper>
      </AnimatePresence>
      <ArrowButton
        onClick={() => {
          handleMoveTo('right');
        }}
        position={'right'}
      >
        {'>'}
      </ArrowButton>
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
  margin: 0.5rem 1rem;
`;

const MainTitle = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
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

const ArrowButton = styled.div<{ position: string }>`
  position: absolute;
  right: ${(props) => (props.position === 'right' ? '0.1rem' : null)};
  left: ${(props) => (props.position === 'right' ? null : '0.1rem')};
  height: 100%;
  font-size: 5rem;
  top: 5rem;
  z-index: 2; // 임시
  cursor: pointer;
`;

const animationVars = {
  WrapperVariants: {
    hidden: (moveTo: string) => ({
      x: moveTo === 'right' ? constants.innerWidth + 16 : 0 - constants.innerWidth - 16,
    }),
    visible: { x: 0 },
    exit: (moveTo: string) => ({ x: moveTo === 'right' ? 0 - constants.innerWidth - 16 : constants.innerWidth + 16 }),
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
