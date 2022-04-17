import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  box-shadow: ${props => props.theme.shadow};
  border-radius: 0.5%;
  
  & th, 
  & td
  { padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(30)};}; 

  & th:not(:last-child), 
  & td:not(:last-child)
  {
    border-right-style: solid;
    border-width: 1px;
    border-color: ${props => `${props.theme.colors.darkGrey}`};
  }
`

export const NameOperation = styled.thead`
  background-color: ${props => `${props.theme.colors.blue}`};
  color: ${props => `${props.theme.colors.white}`};
  text-transform: uppercase;
`

export const InfoAboutTransactions = styled.tbody`  
  text-transform: capitalize;
  color: ${props => `${props.theme.colors.secondaryText}`};
  
  & tr:nth-of-type(2n) {
  background-color: ${props => `${props.theme.colors.grey}`};
}
`