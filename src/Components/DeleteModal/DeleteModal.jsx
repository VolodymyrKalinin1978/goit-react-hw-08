import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Button } from 'Components/Button/Button.styled';
import { deleteContact } from '../../redux/operations';

const customStyles = {
  content: {
    top: '62%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -60%)',
    maxWidth: '70%',
    maxHeight: '82vh',
    overflow: 'hidden',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid black',
    outline: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

const DeleteModal = ({ deleteId, modalIsOpen, closeModal, contactId }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ outline: 'none' }}>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h3 style={{ color: 'red' }}>Confirm the deletion ?</h3>
            <h1>{contactId}</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', fontSize: '16px' }}>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(deleteId));
                closeModal();
              }}
            >
              Yas
            </Button>
            <Button onClick={closeModal}>No</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
