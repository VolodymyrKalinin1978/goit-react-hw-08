import styled from '@emotion/styled';
import { Form } from 'formik';

export const WraperBtn = styled.div`
 display: flex;
 flex-direction: row;
 gap: 10px;
 margin-top: 20px;
`

export const ContainerEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  padding: 20px;
 
  & > h2 {
    font-size: small;
  }

  & > div {
    & > label {
      font-size: 20px;
      font-weight: 600;
    }
    & > span {
      color: red;
    }
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
    & > input {
      padding: 8px 8px;
      border-radius: 8px;
      width: 100%;
      border: 1px solid;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;


