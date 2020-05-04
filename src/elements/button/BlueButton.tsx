import styled from 'styled-components';
import AbstractButton from './AbstractButton';

export default styled(AbstractButton)`
  background-color: #004bc1;
  color: #ffffff;

  &:hover,
  &:focus,
  &:active {
    background-color: #234161;
  }

  &:disabled {
    background-color: #949494;
    color: #f5f7fa;
  }
`;
