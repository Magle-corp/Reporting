// Use.
import styled from 'styled-components';

/**
 * Provide ui component Select.
 */
const StyledSelect = styled.select`
  padding: 6px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.white};
`;

export { StyledSelect };
