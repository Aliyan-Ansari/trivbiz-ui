import React from 'react';
import { Button } from '@mui/material';

function Button(props) {
  return (
    <Button
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
    </Button>
  );
}

export default Button;
