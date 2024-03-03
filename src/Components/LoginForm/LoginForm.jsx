import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import toast from 'react-hot-toast';

import { useId } from 'react';

import { Button } from 'Components/Button/Button.styled';
import { ContainerLoginForm } from './LoginForm.styled';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const LoginForm = () => {
  const passwordLoginId = useId();
  const emailLoginId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(logIn({ password: values.password, email: values.email }))
          .unwrap()
          .then(() => {
            toast.success('Login success');
          })
          .catch(() => {
            toast.error('Login error. Please enter write email or password');
          });
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <ContainerLoginForm>
        <div>
          <label htmlFor={emailLoginId}>Email</label>
          <Field type="email" name="email" id={emailLoginId} />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={passwordLoginId}>Password</label>
          <Field type="password" name="password" id={passwordLoginId} />
          <ErrorMessage name="password" component="span" />
        </div>

        <Button type="submit">Log In</Button>
      </ContainerLoginForm>
    </Formik>
  );
};
