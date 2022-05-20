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
      <ImageSlider mainTitle="Now Playing Movies" results={nowPlayingMovies?.results || []} />
      <ImageSlider mainTitle="Upcoming Movies" results={upcomingMovies?.results || []} />
      <ImageSlider mainTitle="Popular Movies" results={popularMovies?.results || []} />
      {modalOpen && <ModalPoster type="movie" />}
    </BodyLayout>
  );
};

export default Home;
