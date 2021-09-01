import { ButtonProps } from './types';
import React from 'react';
import { StyledButton } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';

const Button = (props: ButtonProps) => {
  const { text, disabled, action, status, dataId, ...rest } = props;

  return (
    <ThemeProvider theme={theme[status]}>
      <StyledButton
        role="button"
        disabled={disabled}
        onClick={action}
        status={status}
        data-id={`${status}-btn-${dataId}`}
        {...rest}
      >
        {text || props.children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
