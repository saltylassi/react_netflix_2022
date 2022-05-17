import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import MovieModal from '../components/MovieModal';
import useHome from '../hooks/useHome';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { isLoading, nowPlayingMovies: data, movieMatch } = useHome();
  return isLoading ? (
    <Container>loading</Container>
  ) : (
    <Container>
      <Banner
        title={data?.results[0].title || ''}
        overview={data?.results[0].overview || ''}
        bgImageID={data?.results[0].backdrop_path || ''}
      />
      <ImageSlider
        titles={data?.results || []}
        totalLength={data?.results.length || 0}
        imgPaths={data?.results.map((result) => result.poster_path) || []}
        ids={data?.results.map((result) => result.id) || []}
      />
      {movieMatch && <MovieModal movie={data?.results.find((movie) => movie.id.toString() === movieMatch.params.id)} />}
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

  //임시, 이중스크롤
  overflow: hidden;
`;
