import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: lightblue;
  font-size: 1.8rem;
  width: 50%;
  margin: 2.5% auto;
`;

const FriendsCards = (props) => {
  return (
    <div className="FriendsCards">
      <StyledDiv key={props.secretFriends.id}>
        <h3>{props.secretFriends.name}</h3>
      </StyledDiv>
    </div>
  );
};
export default FriendsCards;
