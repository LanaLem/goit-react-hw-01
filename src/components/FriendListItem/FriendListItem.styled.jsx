import styled from '@emotion/styled';

export const Friend = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.theme.spacing(4)};
    box-shadow: ${props => props.theme.shadow};
    padding: ${props => props.theme.spacing(2)};
`
export const Avatar = styled.img`
    width: 56px;
    margin-right: ${props => props.theme.spacing(2)};
    border-radius: 5%;
    box-shadow: ${props => props.theme.shadow};
`

export const Status = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
    margin-left: ${props => props.theme.spacing(2)};
    margin-right: ${props => props.theme.spacing(2)};
`