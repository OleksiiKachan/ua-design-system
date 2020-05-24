import React, { ReactNode } from 'react';
import styled from 'styled-components';

type PropsType = {
  children: ReactNode;
  component?: ReactNode | string | Function;
  className?: string;
  disabled?: boolean;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  tabIndex?: number;
  role?: string;
};

const AbstractButton = React.forwardRef(
  (
    {
      children,
      component,
      disabled = false,
      href,
      type = 'button',
      tabIndex = 0,
      ...other
    }: PropsType,
    ref
  ) => {
    const commonProps = {
      tabIndex,
      ref,
    };

    let as: any = 'button';
    let otherProps: object = {
      disabled,
      type,
    };

    const anchorProps = {
      href,
      to: href,
    };

    if (component) {
      as = component;
      otherProps = {
        ...otherProps,
        ...anchorProps,
      };
    } else if (href && !disabled) {
      as = 'a';
      otherProps = { ...anchorProps };
    }

    return React.createElement(
      as,
      {
        ...other,
        ...commonProps,
        ...otherProps,
      },
      children
    );
  }
);

export default styled(AbstractButton)`
  box-sizing: border-box;
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
  text-decoration: none !important;

  &:focus,
  &:active {
    outline: 2px dotted #6f777b !important;
    outline-offset: 3px;
  }

  &--disabled,
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
