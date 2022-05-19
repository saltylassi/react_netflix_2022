import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import ModalPoster from '../components/ModalPoster';
import useHome from '../hooks/useHome';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const {
    npMVLoading,
    pMVLoading,
    uMVLoading,
    nowPlayingMovies,
    popularMovies,
    upcomingMovies,
    handlePosterClick,
    id: modalTargetID,
    modalOpen,
  } = useHome();
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
        handleID={handlePosterClick}
      />
      <ImageSlider
        mainTitle="upcoming"
        titles={upcomingMovies?.results || []}
        totalLength={upcomingMovies?.results.length || 0}
        imgPaths={upcomingMovies?.results.map((result) => result.poster_path) || []}
        ids={upcomingMovies?.results.map((result) => result.id) || []}
        handleID={handlePosterClick}
      />
      <ImageSlider
        mainTitle="popular"
        titles={popularMovies?.results || []}
        totalLength={popularMovies?.results.length || 0}
        imgPaths={popularMovies?.results.map((result) => result.poster_path) || []}
        ids={popularMovies?.results.map((result) => result.id) || []}
        handleID={handlePosterClick}
      />
      {modalOpen && <ModalPoster targetID={modalTargetID} />}
    </BodyLayout>
  );
};

export default Home;
