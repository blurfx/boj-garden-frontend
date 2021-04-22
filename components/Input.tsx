import styled from '@emotion/styled';

export default styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.9em 0.75em;
  border: 1px solid var(--gray);
  caret-color: var(--blue);

  font-size: 1em;    

  outline: 0;
  
  transition: border-color 0.2s;

  appearance: none;

  &:focus {
    border-color: var(--blue);
  }
  
  &::placeholder {
    color: var(--gray);
  }
`;
