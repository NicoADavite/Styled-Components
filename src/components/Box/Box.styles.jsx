import styled from 'styled-components';

export const StyledBox = styled.div`
    background-color: ${({theme}) => theme.colors.red};
    color: white;
    font-size: ${props => props.theme.sizes.crocodile};
    margin: ${props => props.theme.sizes.wolf};
    padding: ${props => props.theme.sizes.wolf};
`

