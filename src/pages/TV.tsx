import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import ModalPoster from '../components/ModalPoster';
import useTV from '../hooks/useTV';
import BodyLayout from '../layouts/BodyLayout';

interface IProps {}
const TV: React.FC<IProps> = () => {
  const { atTVLoading, otaTVLoading, pTVLoading, airingTodayShows, onTheAirShows, popularShows, modalOpen } = useTV();

  const isLoading = atTVLoading || otaTVLoading || pTVLoading;
  return isLoading ? (
    <BodyLayout>loading</BodyLayout>
  ) : (
    <BodyLayout>
      <Banner
        title={airingTodayShows?.results[0].name || ''}
        overview={airingTodayShows?.results[0].overview || ''}
        bgImageID={airingTodayShows?.results[0].backdrop_path || ''}
      />
      <ImageSlider mainTitle="Airing Today Shows" results={airingTodayShows?.results || []} />
      <ImageSlider mainTitle="On The Air Shows" results={onTheAirShows?.results || []} />
      <ImageSlider mainTitle="Popular Shows" results={popularShows?.results || []} />
      {modalOpen && <ModalPoster type="tv" />}
    </BodyLayout>
  );
};

export default TV;
