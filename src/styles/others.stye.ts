import { styled } from "@mui/system";
import { Dialog } from "@mui/material";

export const BootstrapDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        padding: '30px 58px',
        maxWidth: 800
    },
    '& .MuiDialogTitle-root': {
        padding: 0
    },
    '& .MuiDialogContent-root': {
        padding: 0,
        border: 'none'
    },
    });