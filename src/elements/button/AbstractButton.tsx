import styled from 'styled-components';

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  min-height: 50px;
  max-width: 160px;
  width: 100%;
  padding: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;

  &:focus,
  &:active {
    outline: 2px dotted #6f777b !important;
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
