import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
`;

const Like_Movie = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

function Movie({ data }) {
  const [toggleLikeMovie] = useMutation(Like_Movie, {
    variables: { id: parseInt(data.id), isLiked: data.isLiked },
  });

  return (
    <StyledMovie>
      <Link to={`/${data.id}`}>
        <img src={data.medium_cover_image} alt="poster" />
      </Link>
      {data.isLiked ? (
        <Button onClick={toggleLikeMovie}>UnLike</Button>
      ) : (
        <Button variant="outline-primary" onClick={toggleLikeMovie}>
          Like
        </Button>
      )}
    </StyledMovie>
  );
}

export default Movie;
