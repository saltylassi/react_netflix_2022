import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { constants, padding } from '../constants/constants';
import useSlider from '../hooks/useSlider';
import { utils } from '../utils';

interface IProps {
  imgPaths: string[];
}

const ImageSlider: React.FC<IProps> = ({ imgPaths }) => {
  const { idx, increaseIdx } = useSlider();

  return (
    <Container onClick={increaseIdx}>
      <AnimatePresence>
        <Wrapper
          key={idx}
          variants={WrapperVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
        >
          {imgPaths.map((path) => {
            return <Item key={path} bgPath={utils.makeImagePath(path)}></Item>;
          })}
        </Wrapper>
      </AnimatePresence>
    </Container>
  );
};

export default ImageSlider;

const Container = styled.div`
  position: relative;
  top: -15rem;
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
  height: 10rem;
  background-image: url(${(props) => props.bgPath});
  background-size: cover;
`;

const WrapperVariants = {
  hidden: {
    x: constants.innerWidth + 16,
  },
  visible: { x: 0 },
  exit: { x: 0 - constants.innerWidth - 16 },
};
