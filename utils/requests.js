const API_KEY = process.env.API_KEY;

export const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/trending/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchChillMovies: {
    title: "Chill",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchChillaxMovies: {
    title: "Chillax",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchThrillerMovies: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchChillrrMovies: {
    title: "Chillrr",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
};
