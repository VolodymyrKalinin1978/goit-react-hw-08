import { Button } from 'Components/Button/Button.styled';
import { ContainerLi, Person, Telefone, NameDiv } from './Contact.styled';
import { MdDelete, MdEdit } from 'react-icons/md';
import DeleteModal from 'Components/DeleteModal/DeleteModal';
import EditModal from 'Components/EditModal/EditModal';

import { useState } from 'react';

import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
  selectSearchFilter,
} from '../../../redux/selectors';

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modaleditIsOpen, setEditModalIsOpen] = useState(false);
  const [contactId, setContactId] = useState(null);
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contact = useSelector(selectContacts);
  const filter = useSelector(selectVisibleContacts);
  const SearchFilter = useSelector(selectSearchFilter);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <>
      {SearchFilter === ''
        ? contact.map(contactLists => (
            <ContainerLi key={contactLists.id}>
              <NameDiv>
                <p>
                  <Person />
                  {contactLists.name}
                </p>
                <p>
                  <Telefone />
                  {contactLists.number}
                </p>
              </NameDiv>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Button
                  type="button"
                  deleteId={contactLists.id}
                  onClick={() => {
                    setModalIsOpen(true);
                    setContactName(contactLists.name);
                  }}
                >
                  <MdDelete />
                  Delete
                </Button>
                <Button
                  style={{ width: '95px', gap: '12px', justifyContent: 'start' }}
                  type="button"
                  onClick={() => {
                    setEditModalIsOpen(true);
                    setContactName(contactLists.name);
                    setContactNumber(contactLists.number);
                    setContactId(contactLists.id);
                  }}
                >
                  <MdEdit />
                  Edit
                </Button>
              </div>
              <DeleteModal
                contactId={contactName}
                contact={contactLists.name}
                deleteId={contactLists.id}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              />
              <EditModal
                contactId={contactId}
                contact={contactLists.name}
                deleteId={contactLists.id}
                modalIsOpen={modaleditIsOpen}
                closeModal={closeEditModal}
                valueNumber={contactNumber}
                valueName={contactName}
              />
            </ContainerLi>
          ))
        : filter.map(contactLists => (
            <ContainerLi key={contactLists.id}>
              <NameDiv>
                <p>
                  <Person />
                  {contactLists.name}
                </p>
                <p>
                  <Telefone />
                  {contactLists.number}
                </p>
              </NameDiv>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <Button
                  type="button"
                  deleteId={contactLists.id}
                  onClick={() => {
                    setModalIsOpen(true);
                    setContactName(contactLists.name);
                  }}
                >
                  <MdDelete />
                  Delete
                </Button>
                <Button
                  style={{ width: '95px', gap: '12px', justifyContent: 'start' }}
                  type="button"
                  onClick={() => {
                    setEditModalIsOpen(true);
                    setContactName(contactLists.name);
                    setContactNumber(contactLists.number);
                    setContactId(contactLists.id);
                  }}
                >
                  <MdEdit />
                  Edit
                </Button>
              </div>
              <DeleteModal
                contactId={contactName}
                contact={contactLists.name}
                deleteId={contactLists.id}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              />
              <EditModal
                contactId={contactId}
                contact={contactLists.name}
                deleteId={contactLists.id}
                modalIsOpen={modaleditIsOpen}
                closeModal={closeEditModal}
                valueNumber={contactNumber}
                valueName={contactName}
              />
            </ContainerLi>
          ))}
    </>
  );
};

export default Contact;
