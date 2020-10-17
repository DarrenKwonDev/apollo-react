import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return <div>Error~ {error}</div>;
  }
  if (data && data.movies) {
    return (
      <>
        {data.movies.map((m) => (
          <div key={m.id}>{m.id}</div>
        ))}
      </>
    );
  }
}

export default Home;
