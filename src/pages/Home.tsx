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
      <ImageSlider imgPaths={nowPlayingMovies?.results.slice(0, 6).map((result) => result.poster_path) || []} />
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
`;
