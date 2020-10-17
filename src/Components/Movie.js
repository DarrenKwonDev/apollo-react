import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMovie = styled(Link)`
  display: inline-block;
`;

function Movie({ data }) {
  return (
    <StyledMovie to={`/${data.id}`}>
      <img src={data.medium_cover_image} alt="poster" />
    </StyledMovie>
  );
}

export default Movie;
