import styled from 'styled-components';

import { StyledBox } from "components/Box/Box.styles"

export const StyledRoundedBox = styled(StyledBox)`
    border-radius: ${({theme}) => theme.sizes.wolf};
`