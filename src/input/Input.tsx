import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  id: string;
  type?: string;
  label: string;
  disabled?: boolean;
  hideLabel?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  helperMessage?: string;
  onChange?: (event: ChangeEvent) => void;
  tabIndex?: number;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledLabel = styled.label`
  font-size: 100%;
  line-height: 20px;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 2px solid #323a45;
  box-sizing: border-box;
  height: 50px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  padding: 15px;
  padding-left: 13px;

  &:focus,
  &:active {
    outline: 2px dotted #6f777b !important;
    outline-offset: 3px;
  }
`;

const StyledHelperMessage = styled.p`
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 14px;
  line-height: 20px;
  color: #666;
`;

const Input = React.forwardRef(
  (
    {
      id,
      type = 'text',
      label,
      disabled = false,
      hideLabel = false,
      invalid = false,
      invalidMessage,
      helperMessage,
      onChange = () => {},
      tabIndex = 0,
      ...other
    }: InputProps,
    ref
  ) => {
    const textInputClasses = '';

    const sharedTextInputProps = {
      id,
      onChange: (event: ChangeEvent) => {
        if (!disabled) {
          onChange(event);
        }
      },
      type,
      className: textInputClasses,
      disabled,
      'aria-describedby': `${id}-helper`,
      ...other,
    };

    return (
      <StyledWrapper>
        {!hideLabel && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
        {helperMessage && (
          <StyledHelperMessage id={`${id}-helper`}>
            {helperMessage}
          </StyledHelperMessage>
        )}
        <StyledInput {...sharedTextInputProps} ref={ref as any} />
      </StyledWrapper>
    );
  }
);

export default Input;
