import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Button } from 'Components/Button/Button.styled';
import { editContact } from '../../redux/operations';
import { useId } from 'react';

import { ContainerEditForm, WraperBtn } from './EditModal.styled';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

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

const EditModal = ({ modalIsOpen, closeModal, contactId, valueNumber, valueName }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: valueName || '',
    number: valueNumber || '',
  };

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            dispatch(editContact({ id: contactId, ...values }));
            actions.resetForm({ values: initialValues });

            closeModal();
          }}
          validationSchema={contactSchema}
        >
          <ContainerEditForm>
            <div>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage name="name" component="span" />
            </div>

            <div>
              <label htmlFor={numberFieldId}>Phone</label>
              <Field type="text" name="number" id={numberFieldId} />
              <ErrorMessage name="number" component="span" />
            </div>

            <WraperBtn>
              <Button type="submit">Confirm changes</Button>
              <Button onClick={closeModal}>Cancel</Button>
            </WraperBtn>
          </ContainerEditForm>
        </Formik>
      </Modal>
    </div>
  );
};

export default EditModal;
