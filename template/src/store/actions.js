// Example of services
// import MovieAPI from "./tmdb";

// const MovieService = {
//   getTopRated(dispatch) {
//     //console.log("LOADING");
//     MovieAPI.getTopRated()
//       .then((response) => {
//         dispatch({
//           type: "LOAD",
//           payload: response.data,
//         });
//       })
//       .catch((e) => {
//         console.log("UNE ERREUR DANS L'API");
//       });
//   },
//   getPopular(dispatch) {
//     MovieAPI.getPopular()
//       .then((response) => {
//         dispatch({
//           type: "POPULAR",
//           payload: response.data,
//         });
//       })
//       .catch((e) => {
//         console.log("UNE ERREUR DANS L'API");
//       });
//   },

//   getNowPlaying(dispatch) {
//     MovieAPI.getNowPlaying()
//       .then((response) => {
//         dispatch({
//           type: "NOW_PLAYING",
//           payload: response.data,
//         });
//       })
//       .catch((e) => {
//         console.log("UNE ERREUR DANS L'API");
//       });
//   },

//   getPopularByPage(dispatch, page) {
//     MovieAPI.getPagePopular(page)
//       .then((res) => {
//         dispatch({
//           type: "POPULAR_BY_PAGE",
//           payload: res.data,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   },
//   getGenresList(dispatch) {
//     MovieAPI.getGenre()
//       .then((res) => {
//         dispatch({
//           type: "GENRE",
//           payload: res.data.genres,
//         });
//       })
//       .catch((e) => console.log(e));
//   },
//   getTrailers(dispatch, id) {
//     MovieAPI.getTrailers(id)
//       .then((res) => {
//         dispatch({
//           type: "TRAILER",
//           payload: res.data.results,
//         });
//       })
//       .catch((e) => console.log(e));
//   },
// };

// export default MovieService;
