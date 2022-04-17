import styled from '@emotion/styled';

export const Card = styled.div`
    width: 320px;
    text-align: center;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 3%;
    margin-bottom: ${props => props.theme.spacing(4)};
`
export const FotoProfile = styled.div`
    padding: ${props => props.theme.spacing(30)};
`
export const Name = styled.p`
    font-weight: bold;
    font-size: 20px;
    padding: ${props => props.theme.spacing(2)};
`
export const Tag = styled.p`
    font-weight: italic;
    color: ${props => `${props.theme.colors.secondaryText}`};
    padding: ${props => props.theme.spacing(2)};
`
export const Location = styled.p`
    color: ${props => `${props.theme.colors.secondaryText}`};
    padding: ${props => props.theme.spacing(2)};
`
export const Avatar = styled.img`
    width: 96px;
    border-radius: 50%;
`
export const ProfileInfo = styled.ul`
    display: flex;  
`
export const InfoItems = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => `${props.theme.colors.darkGrey}`};
    width: 100%;
    padding: ${props => props.theme.spacing(4)};
    background-color: ${props => `${props.theme.colors.grey}`}
`
export const Label = styled.span`
    font-size: 12px;
    color: ${props => `${props.theme.colors.secondaryText}`};
`
export const Quantity = styled.span`
    font-weight: bold;
`