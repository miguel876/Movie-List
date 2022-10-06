import { MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 24
}))

export const StyledPopupTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 32
}))

export const StyledPopupSubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    fontSize: 14
}))

export const StyledPopupText = styled(Typography, {
    shouldForwardProp: (color: string) => color !== "color" })<{color?: string}>(({ theme, color }) => ({
    color: color === 'blue' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
    fontSize: 16
}))

export const StyledMenuSelectItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center'
}))

export const StyledMenuSelectTitle = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center'
    
}))