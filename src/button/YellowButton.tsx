import styled from 'styled-components';
import AbstractButton from './AbstractButton';

export default styled(AbstractButton)`
  background-color: #ffe358;
  color: #1d1d1b;

  &:hover,
  &:focus,
  &:active {
    background-color: #f6cd00;
  }

  &:disabled {
    background-color: #c4c4c4;
    color: #666666;
  }
`;
