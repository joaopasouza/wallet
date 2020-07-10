import React from 'react';
import { Container } from './styles';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
