import styled from 'styled-components';
import AbstractButton from './AbstractButton';

export default styled(AbstractButton)`
  background-color: #fff;
  border: 2px solid #004bc1;
  color: #004bc1;

  &:hover:not(&:focus):not(&:active) {
    border-color: #234161;
    color: #234161;
  }

  &:focus,
  &:active {
    background-color: #4085bf;
    border-color: #4085bf;
    color: #fff;
  }

  &:disabled {
    border-color: #5a7189;
    background-color: #fff;
    color: #666666;
  }
`;
