import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledOutlinedButton = styled(Button, {
    shouldForwardProp: (active: string) => active !== '' })<{active?: string}>(({ theme, active }) => ({
    color: active === "true" ? theme.palette.primary.main : theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: 12,
    borderRadius: 28,
    textTransform: 'capitalize',
    backgroundColor: active === "true" ? theme.palette.secondary.main : '',
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: active === "true" && theme.palette.secondary.main
    }
}))
