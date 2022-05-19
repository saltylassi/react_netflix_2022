import { AnimatePresence, motion, ScrollMotionValues } from 'framer-motion';
import styled from 'styled-components';
import { constants } from '../constants/constants';
import useModalPoster from '../hooks/useModalPoster';
import { utils } from '../utils';

interface IProps {
  targetID: string;
}

const ModalPoster: React.FC<IProps> = ({ targetID }) => {
  const { isLoading, handleOverlayClick, scrollInfo, data } = useModalPoster('movie', targetID);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Poster scrollInfo={scrollInfo}>loading</Poster>
      ) : (
        <>
          <ModalOverlay
            onClick={handleOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <Poster layoutId={targetID} scrollInfo={scrollInfo}>
            <BGImg bgPath={utils.makeImagePath(data.backdrop_path)} />
            <span>{'//TODO addContents'}</span>
            <PosterContentsColumn>
              <Text>{data.title}</Text>
            </PosterContentsColumn>
            <PosterContentsColumn>
              <Text>{data.overview}</Text>
            </PosterContentsColumn>
            <PosterContentsColumn>
              <Text>{data.release_date}</Text>
            </PosterContentsColumn>
          </Poster>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalPoster;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const Poster = styled(motion.div)<{ scrollInfo: ScrollMotionValues }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 50vw;
  height: 60vh;
  top: ${(props) => props.scrollInfo.scrollY.get() + constants.innerHeight / 5}px;
  left: 0;
  right: 0;
  margin: auto auto;

  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 1rem;
  overflow: hidden;
`;

const BGImg = styled.div<{ bgPath: string }>`
  background-image: url(${(props) => props.bgPath});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 25rem;
`;

const PosterContentsColumn = styled.div``;

const Text = styled.span``;
