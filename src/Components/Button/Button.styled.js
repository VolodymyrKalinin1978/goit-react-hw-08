import styled from '@emotion/styled';

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 5px;
  height: 30px;
  margin: 0 auto;
  /* margin-left: 5px; */
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16),
      0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;
