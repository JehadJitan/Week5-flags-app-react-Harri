import React from "react";
import styled from "styled-components";
import Countries from "../Components/Countries";
import FavouriteList from "../Components/favouritesList";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem;
  width: 95%;
  height: 650px;
`;

const MainContainer = () => {
  return (
    <StyledContainer>
      <FavouriteList />
      <Countries />
    </StyledContainer>
  );
};

export default MainContainer;
