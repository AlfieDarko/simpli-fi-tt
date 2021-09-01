import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled('button')<ButtonProps>`
  font-family: 'Rubik', sans-serif;
  font-weight: 800;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border}, 0 0.625em 0 0 ${({ theme }) => theme.colors.shadow};
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: ${({ theme }) => theme.colors.main};
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border}, 0 0.5em 0 0 ${({ theme }) => theme.colors.shadow};
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:focus {
    background: ${({ theme }) => theme.colors.shadow};
    &::before {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border}, 0 0.5em 0 0 ${({ theme }) => theme.colors.shadow};
    }
  }
  &:active {
    background: ${({ theme }) => theme.colors.main};
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border}, 0 0 ${({ theme }) => theme.colors.shadow};
      transform: translate3d(0, 0, -1em);
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
