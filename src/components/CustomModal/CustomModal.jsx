import { useContext } from 'react';
import Modal from 'react-modal';
import {
  button,
  ModalTitle,
  ContainerButton,
  customStyles,
  LinkStyled,
} from './CustomModal.styled';
import { ModalContext } from '../../context/ModalContextProvider';
import Button from '../Button';

const CustomModal = ({ children }) => {
  const { modalIsOpen, setIsOpen } = useContext(ModalContext);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal Cart"
    >
      <ModalTitle>Your Order</ModalTitle>
      {children}
      <ContainerButton>
        <Button style={button} onClick={closeModal}>
          Back to shopping
        </Button>
        <LinkStyled to={'#'}>
          <Button style={button}>Go to my cart</Button>
        </LinkStyled>
      </ContainerButton>
    </Modal>
  );
};

export default CustomModal;
