// Use.
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant?: string;
}

const StyledLayout = styled.div<{ variant?: string }>`
  width: 100%;
`;

/**
 * Provide ui component Layout.
 */
const Layout = ({ className, children, variant, ...props }: Props) => {
  return (
    <StyledLayout className={className} variant={variant} {...props}>
      {children}
    </StyledLayout>
  );
};

export { Layout };
