import styled from '@emotion/styled';
import { HiPhone, HiUser } from 'react-icons/hi';

export const ContainerLi = styled.li`
  display: flex;
  min-width: 250px;
  padding: 8px 8px;
  border: 1px solid;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;

  & > div {
    & > p {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 0;
      font-weight: 500;
      font-size: 16px;
    }
    & > p:first-of-type {
      margin-bottom: 5px;
    }
  }
  & > Button {
    margin: 0;
  }
`;

export const Person = styled(HiUser)`
  width: 18px;
  height: 18px;
`;

export const Telefone = styled(HiPhone)`
  width: 18px;
  height: 18px;
`;
