const API_KEY = '255cdd61351ac1942ffaec6975ff307d';
const BASE_URL = 'https://api.themoviedb.org/3';

const apis = {
  getMovies: (type: 'now_playing' | 'upcoming' | 'popular') => {
    //now_playing, upcoming, popular
    return fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`).then((res) => {
      return res.json();
    });
  },
  getShows: (type: 'airing_today' | 'on_the_air' | 'popular') => {
    //airing_today, on_the_air, popular
    return fetch(`${BASE_URL}/tv/${type}?api_key=${API_KEY}`).then((res) => {
      return res.json();
    });
  },
  getMovieWithID: (id: string) => {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then((res) => res.json());
  },
  getDetail: (type: string, id: string) => {
    return fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`).then((res) => res.json());
  },
  getSearchResults: (type: 'movie' | 'tv', keyword: string, language?: string) => {
    return fetch(`
    ${BASE_URL}/search/${type}?api_key=${API_KEY}&language=${
      language ? language : 'en-US'
    }&query=${keyword}&page=1&include_adult=false`).then((res) => res.json());
  },
};

export default apis;
