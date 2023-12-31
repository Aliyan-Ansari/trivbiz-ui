import React from 'react';
import { Button as MUIButton } from '@mui/material';

function Button(props) {
  return (
    <MUIButton
      variant={props.variant || 'contained'}
      disabled={props.disabled}
      onClick={props.onClick}
      color={props.color || 'primary'}
      size={props.size || 'medium'}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={props.sx}
      {...props}
    >
      {props.text}
    </MUIButton>
  );
}

export default Button;
