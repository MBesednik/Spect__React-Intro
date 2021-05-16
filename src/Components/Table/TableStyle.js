import styled from 'styled-components';
import { 
    colors,
    transitionCubic,
    boxShadowHover,
    breakpoints 
} from '../../lib/style/theme';

export const Message = styled.p`
    text-align: center;
    padding-top: 50px;
`;

export const AddEventButton = styled.button`
  font-size: 18px;
  display: block;
  text-decoration: none;
  width: 150px;
  line-height: 50px;
  text-align: center;
  background: ${colors.white};
  border: 1px solid ${colors.black};
  border-radius: 6px;
  transition: ${transitionCubic};
  margin-top: 40px;

  &:hover {
    cursor: pointer;
    border-color: ${colors.green};
    color: ${colors.green};
    transform: translateY(-0.25em);
    box-shadow: 0px 0px 10px 2px ${colors.green};
    font-weight: bold;
    }
  &:focus {
    outline: none;
  }
`;

export const TableWrapper = styled.table`
    width: 100%;
    font-weight: 550;
    text-align: center;
    margin-top: 30px;
    line-height: 50px;
    border-spacing: 0;
    border-radius:6px;
    overflow: hidden;
    box-shadow: ${boxShadowHover};

    & tbody tr:nth-child(even) {
        background-color: ${colors.lightGrey}
    }
    
    & thead {
        background-color: ${colors.red};
        font-weight: 6px;
        color: ${colors.white};
    }

    & td,th {
        display: none;
    }

    & td:nth-child(-n + 2), td:last-child, th:nth-child(-n + 2), th:last-child {
        display: table-cell;
    }

    @media screen and (${breakpoints.mobileLarge}) {
        & td:nth-child(3), td:nth-child(7), th:nth-child(3), th:nth-child(7) {
            display: table-cell;
        }
    }
    @media screen and (${breakpoints.tablet}) { 
        & td:nth-child(n + 4),th:nth-child(n + 4) {
            display: table-cell;
        }
    }
`;

export const TableRow = styled.tr`
   &:hover{
        background-color: ${colors.hoverLightGray}
    }
`;

export const TableBody = styled.tbody`
    margin-top: auto;
    margin-bottom: auto;
`;

export const BtnDeleteEvent = styled.button`
    
    border: none;

    background-color: inherit;
    &:hover{
        cursor: pointer;
    }
`;