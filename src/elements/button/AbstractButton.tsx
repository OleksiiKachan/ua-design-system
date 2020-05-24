import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './styles.scss';

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
      className,
      disabled = false,
      href,
      type = 'button',
      tabIndex = 0,
      ...other
    }: PropsType,
    ref
  ) => {
    const buttonClasses = classNames(className, {
      [`abstract-button`]: true,
      [`abstract-button--disabled`]: disabled,
    });

    const commonProps = {
      tabIndex,
      className: buttonClasses,
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

export default AbstractButton;
