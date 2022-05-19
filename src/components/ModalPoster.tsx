import { AnimatePresence, motion, ScrollMotionValues } from 'framer-motion';
import styled from 'styled-components';
import { constants } from '../constants/constants';
import { IMovieResult } from '../hooks/useHome';
import useModalPoster from '../hooks/useModalPoster';
import { utils } from '../utils';

interface IProps {
  targetID: string;
}

const ModalPoster: React.FC<IProps> = ({ targetID }) => {
  const { movieMatch, handleClick, scrollInfo, data } = useModalPoster('movie', targetID);

  return (
    <AnimatePresence>
      {movieMatch && data && (
        <>
          <ModalOverlay
            onClick={handleClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <Poster layoutId={movieMatch.params.id} scrollInfo={scrollInfo}>
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
  background-color: 'black';
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
