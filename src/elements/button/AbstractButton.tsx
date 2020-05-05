import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './styles.scss';

type PropsType = {
  children: ReactNode;
  as?: ReactNode | string | Function;
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
      as,
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
      className,
    });

    const commonProps = {
      tabIndex,
      className: buttonClasses,
      ref,
    };

    let component: any = 'button';
    let otherProps: object = {
      disabled,
      type,
    };

    const anchorProps = {
      href,
    };

    if (as) {
      component = as;
      otherProps = {
        ...otherProps,
        ...anchorProps,
      };
    } else if (href && !disabled) {
      component = 'a';
      otherProps = { ...anchorProps };
    }

    return React.createElement(
      component,
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
