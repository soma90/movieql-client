import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(limit:50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId:Int!){
    movie(id: $movieId) {
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;