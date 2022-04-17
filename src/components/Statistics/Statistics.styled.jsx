import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
    display: flex;
    flex-direction: column;
    width: 320px;
    text-align: center;
    border-radius: 3%;
    box-shadow: ${props => props.theme.shadow};
    margin-bottom: ${props => props.theme.spacing(4)};
`

export const Title = styled.h2`
    padding: ${props => props.theme.spacing(14)};
    color: ${props => `${props.theme.colors.secondaryText}`};
    text-transform: uppercase;
`

export const StatisticsList = styled.ul`
    display: flex;
`

export const ItemStatics = styled.li`
    display: flex;
    flex-direction: column;
    background-color: ${props => `${props.theme.colors.randomColor}`};
    color: ${props => `${props.theme.colors.white}`};
    padding: ${props => props.theme.spacing(6)};
    width: 100%;
`