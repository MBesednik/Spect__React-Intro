import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';

export const SearchBarWrapper = styled.div`
  padding: 0 15px;

  @media screen and (${breakpoints.mobileLarge}) {
    max-width: 400px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 15px;
  width: 100%;

  &:focus {
    outline-color: ${colors.yellow};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
