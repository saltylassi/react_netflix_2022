import { useEffect } from 'react';
import { useQuery } from 'react-query';
import apis from '../apis';

interface IResponse {
  page: number;
  results: Array<ISearchMovieResult & ISearchTVResult>;
  total_pages: number;
  total_results: number;
}

export interface ISearchMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: object;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISearchTVResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<number>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const useSearchResult = (type: string, keyword: string) => {
  const { isLoading, data } = useQuery<IResponse>([type, keyword], () =>
    apis.getSearchResults(type === 'Movies' ? 'movie' : 'tv', keyword)
  );

  return { isLoading, data };
};

export default useSearchResult;
