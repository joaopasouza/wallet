import styled from 'styled-components';
import { variant } from 'styled-system';
import { darken } from 'polished';

import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  outline: none;
  width: ${(props) => (props.block ? '100%' : 'inherit')};

  ${variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: '#4361ee',
        borderColor: '#4361ee',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: darken(0.2, '#4361ee'),
          borderColor: darken(0.2, '#4361ee'),
        },
      },
      secondary: {
        backgroundColor: '#f72585',
        borderColor: '#f72585',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: darken(0.2, '#f72585'),
          borderColor: darken(0.2, '#f72585'),
        },
      },
    },
  })}
`;
