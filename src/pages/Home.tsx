import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import MovieModal from '../components/MovieModal';
import useHome from '../hooks/useHome';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { isLoading, nowPlayingMovies: data, movieMatch } = useHome();
  return isLoading ? (
    <BodyLayout>loading</BodyLayout>
  ) : (
    <BodyLayout>
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
    </BodyLayout>
  );
};

export default Home;
