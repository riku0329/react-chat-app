import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LIGHT_BLACK, ASH, BLACK } from "../../utils/constans";

import ChannelName from "./channelName.component";
import AboutUser from "../user-option/about-user.component";
import OptionIcon from "../user-option/option-icon.component";
import OptionDropdown from "../user-option/option-dropdown.component";
import {
  setSearchResults,
  setSearchTherm
} from "../../redux/message/message.actions";

const HeaderContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  background-color: ${LIGHT_BLACK};
  box-shadow: 1px 3px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
`;

const UserOption = styled.div`
  display: flex;
  flex-direction: row;
  padding: 11px;
`;

const SearchForm = styled.input`
  margin-right: 5rem;
  padding-left: 5px;
  color: ${ASH};
  outline: none;
  border: none;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  background-color: ${BLACK};
  width: 100%;
  height: 2rem;
  &:hover,
  &:active {
  }

  @media screen and (max-width: 800px) {
    margin-right: 0;
    padding-left: 10px;
  }
`;

const Header = ({
  hidden,
  currentUser,
  currentChannel,
  messages,
  setSearchResults,
  setSearchTherm,
}) => {
  const [search, setSearchState] = useState({
    searchInput: ""
  });
  const { searchInput } = search;

  const handleSearchSubmit = event => {
    event.preventDefault();
    setSearchState({
      searchInput: ""
    });
  };

  const handleSearchChange = event => {
    const { name, value } = event.target;
    setSearchState({ [name]: value });
    setSearchTherm({ [name]: value });
  };

  useEffect(() => {
    handleSerachMessages(messages, searchInput);
  }, [searchInput]);

  const handleSerachMessages = (messages, searchTherm) => {
    const channelMessage = [...messages];
    const regex = new RegExp(searchTherm, "gi");
    const searchFilter = channelMessage.reduce((acc, message) => {
      if (
        message.content &&
        (message.content.match(regex) || message.displayName.match(regex))
      ) {
        acc.push(message);
      }
      return acc;
    }, []);
    setSearchResults(searchFilter);
  };
  return (
    <HeaderContainer>
      <UserOption>
        {currentChannel && messages ? (
          <ChannelName
            currentChannel={currentChannel}
            messages={messages}
          ></ChannelName>
        ) : (
          ""
        )}
        <form onClick={handleSearchSubmit}>
          <SearchForm
            type="text"
            placeholder="Search Messages"
            onChange={handleSearchChange}
            value={searchInput}
            name="searchInput"
            label="search"
            autoComplete="off"
          />
        </form>
        {hidden ? null : <OptionDropdown />}
        {currentUser ? (
          <AboutUser currentUser={currentUser} />
        ) : (
          <p>gest user</p>
        )}
        <OptionIcon />
      </UserOption>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  hidden: state.user.hidden,
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  messages: state.message.messages,
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: searchResults => dispatch(setSearchResults(searchResults)),
  setSearchTherm: searchTherm => dispatch(setSearchTherm(searchTherm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
