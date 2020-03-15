import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { connect } from "react-redux";

import { addChannel } from "../../firebase/firebase.utils";

import { checkLength } from "../../utils/check-valid";
import { FormContainer, FormInput } from "../form-input/form-input.component";
import { ChalleIcon } from "../side-panel/channels-panel.component";
import { BLUE, DARK_BLACK } from "../../utils/constans";
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
    backgroundColor: `${DARK_BLACK}`
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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const AddChannelModal = ({ currentUser }) => {
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
      closeModal()
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
      <span onClick={openModal}>
        <p>
          Add Channels(0)
          <ChalleIcon />
        </p>
      </span>
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
                placeholder="Name"
                label="Create Channel"
                onChange={handleChange}
              />
              <ButtonContainer>
                <CustomButton
                  isCustom
                  onClick={handleSubmit}

                >
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
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(AddChannelModal);
