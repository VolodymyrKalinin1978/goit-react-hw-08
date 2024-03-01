import { useId } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'Components/Button/Button.styled';
import { ContainerForm } from './ContactForm.styled';

import { addContact } from '../../redux/operations';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(addContact({ name: values.name, number: values.number }));
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <ContainerForm>
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

        <Button type="submit">Add contact</Button>
      </ContainerForm>
    </Formik>
  );
};

export default ContactForm;
