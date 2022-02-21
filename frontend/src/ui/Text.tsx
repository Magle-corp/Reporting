// Use.
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  as?: React.ElementType;
}

const StyledText = styled.p<{ variant: string }>`
  ${({ theme, variant }) => theme.typography[variant]}
  box-sizing: border-box;
`;

/**
 * Provide ui component Text.
 */
const Text = ({ className, children, variant = 'p', as, ...props }: Props) => (
  <StyledText className={className} variant={variant} as={as} {...props}>
    {children}
  </StyledText>
);

export { Text };
