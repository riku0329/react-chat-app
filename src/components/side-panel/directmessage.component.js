import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ASH } from "../../utils/constans";

const DirectMessageContainer = styled.div``;

const IconStyle = styled.span`
  fill: ${ASH};
  text-align: center;
  padding-right: 2px;
`;

const DirectMessage = ({ currentUser }) => {
  return (
    <DirectMessageContainer>
      <IconStyle>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="15"
          viewBox="0 0 32 32"
        >
          <title>bubble2</title>
          <path d="M16 6c-1.717 0-3.375 0.271-4.928 0.804-1.46 0.502-2.76 1.211-3.863 2.108-2.069 1.681-3.209 3.843-3.209 6.088 0 1.259 0.35 2.481 1.039 3.63 0.711 1.185 1.781 2.268 3.093 3.133 0.949 0.625 1.587 1.623 1.755 2.747 0.056 0.375 0.091 0.753 0.105 1.129 0.233-0.194 0.461-0.401 0.684-0.624 0.755-0.755 1.774-1.172 2.828-1.172 0.168 0 0.336 0.011 0.505 0.032 0.655 0.083 1.325 0.126 1.99 0.126 1.717 0 3.375-0.271 4.928-0.804 1.46-0.502 2.76-1.211 3.863-2.108 2.069-1.681 3.209-3.843 3.209-6.088s-1.14-4.407-3.209-6.088c-1.104-0.897-2.404-1.606-3.863-2.108-1.553-0.534-3.211-0.804-4.928-0.804zM16 2v0c8.837 0 16 5.82 16 13s-7.163 13-16 13c-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z"></path>
        </svg>
      </IconStyle>
      DirectMessage
    </DirectMessageContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(DirectMessage);
