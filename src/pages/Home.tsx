import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import ModalPoster from '../components/ModalPoster';
import useHome from '../hooks/useHome';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { npMVLoading, pMVLoading, uMVLoading, nowPlayingMovies, popularMovies, upcomingMovies, modalOpen } = useHome();
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
      <ImageSlider mainTitle="nowPlaying" results={nowPlayingMovies?.results || []} />
      <ImageSlider mainTitle="upcoming" results={upcomingMovies?.results || []} />
      <ImageSlider mainTitle="popular" results={popularMovies?.results || []} />
      {modalOpen && <ModalPoster />}
    </BodyLayout>
  );
};

export default Home;
