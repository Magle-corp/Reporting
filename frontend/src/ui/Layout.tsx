// Use.
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant?: string;
}

const StyledLayout = styled.div<{ variant?: string }>`
  box-sizing: border-box;
  width: 100%;

  > * {
    margin-top: 30px;
  }
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
