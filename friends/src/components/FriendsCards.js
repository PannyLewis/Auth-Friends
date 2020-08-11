import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: lightblue;
  font-size: 2 rem;
  width: 50%;
  margin: 2.5% auto;
`;

const FriendsCards = (props) => {
  return (
    <div className="FriendsCards">
      <StyledDiv>
        <h3>{`Name: ${props.friend.name}`}</h3>
        <h3>{`Age: ${props.friend.age}`}</h3>
        <h3>{`Email:  ${props.friend.email}`}</h3>
      </StyledDiv>
    </div>
  );
};
export default FriendsCards;
