import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggelHidden } from "../../redux/user/user.actions";
import { LIGHTER_GREY, LIGHT_ASH } from "../../utils/constans";

const OptionIconContainer = styled.div`
  padding: 11px;
`;

const IconStyle = styled.span`
  stroke: ${LIGHT_ASH};
    &:hover {
      stroke: ${LIGHTER_GREY};
    }
`;

const OptionIcon = ({ toggleHidden }) => {
  return (
    <OptionIconContainer>
      <IconStyle onClick={toggleHidden}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <line x1="21" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="21" y1="18" x2="3" y2="18"></line>
        </svg>
      </IconStyle>
    </OptionIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleHidden: () => dispatch(toggelHidden())
});

export default connect(null, mapDispatchToProps)(OptionIcon);
