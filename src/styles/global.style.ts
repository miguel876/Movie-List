import { styled } from "@mui/system";

export const StyledDialogDivider = styled('div')(({ theme }) => ({ 
    width: 52,
    backgroundColor: theme.palette.secondary.contrastText,
    height: 3,
    margin: '16px 0'
}))