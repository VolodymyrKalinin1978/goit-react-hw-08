import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from 'Components/ContactForm/ContactForm';
import SearchBox from 'Components/SearchBox/SearchBox';
import ContactList from 'Components/ContactList/ContactList';

import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
