import { Button } from 'Components/Button/Button.styled';
import { ContainerLi, Person, Telefone } from './Contact.styled';
import { deleteContact } from '../../../redux/operations';

import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../../redux/selectors';

const Contact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectVisibleContacts);

  return (
    <>
      {filter.map(contactLists => (
        <ContainerLi key={contactLists.id}>
          <div>
            <p>
              <Person />
              {contactLists.name}
            </p>
            <p>
              <Telefone />
              {contactLists.number}
            </p>
          </div>
          <Button type="button" onClick={() => dispatch(deleteContact(contactLists.id))}>
            Delete
          </Button>
        </ContainerLi>
      ))}
    </>
  );
};

export default Contact;
