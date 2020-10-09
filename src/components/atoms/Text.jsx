import React from 'react';
import { Box, Typography } from '@material-ui/core';

function Text({ bold, variant, color, children, textColor }) {
  return (
    <>
      <Typography
        style={{ color: textColor }}
        variant={variant}
        gutterBottom
        color={color}>
        {bold ? <Box fontWeight={600}>{children}</Box> : children}
      </Typography>
    </>
  );
}

export default Text;
