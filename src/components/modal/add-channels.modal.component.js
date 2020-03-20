import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { connect } from "react-redux";

import { addChannel } from "../../firebase/firebase.utils";

import { checkLength } from "../../utils/check-valid";
import { FormContainer, FormInput } from "../form-input/form-input.component";
import { ChalleIcon } from "../side-panel/channels.component";
import { BLUE, LIGHT_DARK, OFF_WHITE } from "../../utils/constans";
import CustomButton from "../custom-button/custom-button.component";

const customStyles = {
  content: {
    width: "25rem",
    height: "25rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: `${LIGHT_DARK}`
  }
};

const ChannelForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  padding-top: 3rem;
`;

const Span = styled.div`
  :hover {
    color: ${OFF_WHITE};
  }
`;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const AddChannelModal = ({ currentUser, channels }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [createChannel, setCreateChannel] = useState({
    channelName: ""
  });
  const { channelName } = createChannel;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = `${BLUE}`;
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (checkLength(channelName, 3, 20)) {
      return;
    }
    try {
      await addChannel(channelName, currentUser);
      setCreateChannel({ channelName: "" });
      closeModal();
    } catch (error) {
      console.log("error creating user", error.message);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCreateChannel({ ...createChannel, [name]: value });
  };

  return (
    <div>
      <Span onClick={openModal}>
        <p>
          Add Channels({channels.length})
          <ChalleIcon />
        </p>
      </Span>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ChannelForm>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Create Channel</h2>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormInput
                type="text"
                name="channelName"
                value={channelName}
                placeholder="Channel Name"
                label="Create Channel"
                onChange={handleChange}
              />
              <ButtonContainer>
                <CustomButton isCustom onClick={handleSubmit}>
                  Create Channel
                </CustomButton>
                <CustomButton isClose onClick={closeModal}>
                  close
                </CustomButton>
              </ButtonContainer>
            </FormContainer>
          </form>
        </ChannelForm>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  channels: state.channel.channels
});

export default connect(mapStateToProps, null)(AddChannelModal);
