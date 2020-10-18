import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_intro
      medium_cover_image
      genres
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (data?.movie && data.suggestions) {
    return (
      <div style={{ padding: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "2rem" }}>{data.movie.title}</div>
          <br />
          <div>{data.movie.rating}</div>
          <div>{data.movie.isLiked ? "true" : "false"}</div>
          <br />
          <div>{data.movie.description_intro}</div>
          <br />
          <span>
            Genres :
            {data.movie.genres.map((el) => (
              <span key={Math.random()}> {el}</span>
            ))}
          </span>
        </div>
        <img src={data.movie.medium_cover_image} alt="poster" />
        <div style={{ fontSize: "1.5rem", padding: "1rem 0" }}>Sugestions</div>
        {data.suggestions.map((el) => (
          <React.Fragment key={el.id}>
            <div>{el.title}</div>
            <img
              src={el.medium_cover_image}
              alt="poster"
              style={{ width: "100px" }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Detail;
