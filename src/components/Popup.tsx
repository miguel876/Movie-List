import React, { FC } from 'react'
import { DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { BootstrapDialog } from '../styles/others.stye';

interface PopupI {
  children: any,
  onClose: () => void;
  title?: any,
  loading?: boolean
}

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ mb: 16 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            disableRipple
            sx={{
              position: 'absolute',
              right: 32,
              top: 30,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Stack spacing={2}>
                <CloseIcon />
                <Typography sx={{ fontSize: 8}}>CLOSE</Typography>
            </Stack>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

export const Popup:FC<PopupI> = ({ children, title, onClose, loading }) => {
  
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          { title }
      </BootstrapDialogTitle>
      { children }
    </BootstrapDialog>
  )
}
