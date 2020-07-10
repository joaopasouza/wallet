import styled from 'styled-components';
import { variant } from 'styled-system';

export const Container = styled('button')(
  {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.375rem 0.75rem',
    outline: 'none',
  },
  variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: '#ffffff',
      },
      secondary: {
        backgroundColor: 'secondary',
        borderColor: 'secondary',
        color: '#ffffff',
      },
    },
  }),
);
