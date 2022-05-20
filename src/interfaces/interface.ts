export interface IResponse<T> {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
}

export interface ITVDetailResponse {
  backdrop_path: string;
  original_name: string;
  genres: Array<{ id: number; name: string }>;
  overview: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetailResponse {
  backdrop_path: string;
  title: string;
  genres: Array<{ id: number; name: string }>;
  overview: string;
  vote_average: number;
  vote_count: number;
}
