import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import MovieModal from '../components/MovieModal';
import useHome from '../hooks/useHome';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { npMVLoading, pMVLoading, uMVLoading, nowPlayingMovies, popularMovies, upcomingMovies, movieMatch } =
    useHome();
  const isLoading = npMVLoading || pMVLoading || uMVLoading;
  return isLoading ? (
    <BodyLayout>loading</BodyLayout>
  ) : (
    <BodyLayout>
      <Banner
        title={nowPlayingMovies?.results[0].title || ''}
        overview={nowPlayingMovies?.results[0].overview || ''}
        bgImageID={nowPlayingMovies?.results[0].backdrop_path || ''}
      />
      <ImageSlider
        mainTitle="nowPlaying"
        titles={nowPlayingMovies?.results || []}
        totalLength={nowPlayingMovies?.results.length || 0}
        imgPaths={nowPlayingMovies?.results.map((result) => result.poster_path) || []}
        ids={nowPlayingMovies?.results.map((result) => result.id) || []}
      />
      <ImageSlider
        mainTitle="upcoming"
        titles={upcomingMovies?.results || []}
        totalLength={upcomingMovies?.results.length || 0}
        imgPaths={upcomingMovies?.results.map((result) => result.poster_path) || []}
        ids={upcomingMovies?.results.map((result) => result.id) || []}
      />
      <ImageSlider
        mainTitle="popular"
        titles={popularMovies?.results || []}
        totalLength={popularMovies?.results.length || 0}
        imgPaths={popularMovies?.results.map((result) => result.poster_path) || []}
        ids={popularMovies?.results.map((result) => result.id) || []}
      />
      {movieMatch && (
        <MovieModal movie={nowPlayingMovies?.results.find((movie) => movie.id.toString() === movieMatch.params.id)} />
      )}
    </BodyLayout>
  );
};

export default Home;
