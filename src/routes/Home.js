import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../Components/Movie";

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;

  align-items: center;
  justify-items: center;

  width: 100%;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log(data);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return <div>Error~ {error}</div>;
  }
  if (!loading && data && data.movies) {
    return (
      <MovieWrapper>
        {data.movies.map((m) => (
          <Movie key={m.id} data={m} />
        ))}
      </MovieWrapper>
    );
  }
}

export default Home;
