import { FC } from 'react'
import { StyledPageTitle } from '../styles/text.style'

interface Title {
    children: String,
    [x: string]: any;
}

export const PageTitle:FC<Title> = ({ children, ...rest }) => <StyledPageTitle {...rest}>{ children }</StyledPageTitle>

