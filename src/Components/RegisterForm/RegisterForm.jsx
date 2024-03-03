import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

import { useId } from 'react';

import { Button } from 'Components/Button/Button.styled';
import { ContainerRegisterForm } from './RegisterForm.styled';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const RegisterForm = () => {
  const nameRegisterId = useId();
  const passwordRegisterdId = useId();
  const emailRegisterdId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(register({ name: values.name, password: values.password, email: values.email }))
          .unwrap()
          .then(() => {
            toast.success('Register success');
          })
          .catch(() => {
            toast.error('Register error. Please enter write email or password');
          });
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <ContainerRegisterForm>
        <div>
          <label htmlFor={nameRegisterId}>Username</label>
          <Field type="text" name="name" id={nameRegisterId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={emailRegisterdId}>Email</label>
          <Field type="email" name="email" id={emailRegisterdId} />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={passwordRegisterdId}>Password</label>
          <Field type="password" name="password" id={passwordRegisterdId} />
          <ErrorMessage name="password" component="span" />
        </div>

        <Button type="submit">Register</Button>
      </ContainerRegisterForm>
    </Formik>
  );
};
