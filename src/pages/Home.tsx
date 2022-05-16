import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import useHome from '../hooks/useHome';

interface IProps {}
const Home: React.FC<IProps> = () => {
  const { isLoading, nowPlayingMovies, error } = useHome();
  return isLoading ? (
    <Container>loading</Container>
  ) : (
    <Container>
      <Banner
        title={nowPlayingMovies?.results[0].title || ''}
        overview={nowPlayingMovies?.results[0].overview || ''}
        bgImageID={nowPlayingMovies?.results[0].backdrop_path || ''}
      />
      <ImageSlider
        titles={nowPlayingMovies?.results || []}
        totalLength={nowPlayingMovies?.results.length || 0}
        imgPaths={nowPlayingMovies?.results.map((result) => result.poster_path) || []}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto 0;

  //이중스크롤
  overflow: hidden;
`;
