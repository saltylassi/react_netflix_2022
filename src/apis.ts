const API_KEY = '255cdd61351ac1942ffaec6975ff307d';
const BASE_URL = 'https://api.themoviedb.org/3';

const apis = {
  getNowPlayingMovies: () => {
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then((res) => {
      return res.json();
    });
  },
  getMovie: (id: string) => {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then((res) => res.json());
  },
};

export default apis;
