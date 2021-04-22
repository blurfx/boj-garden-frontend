import styled from '@emotion/styled';

export default styled.button`
  width: 100%;
  max-width: 80px;
  padding: 0.9em 0.75em;
  border: 0;

  color: #fff;

  font-size: 1em;

  background: var(--blue);

  transition: background 0.2s;
  
  appearance: none;
  
  &:focus, &:active, &:hover {
    background: var(--dark-blue);
  }
`;
