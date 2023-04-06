import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type AuthDesignProps = {
  triangle: string;
  rectangle: string;
  circle: string;
  halfCircle: string;
  dottedSquare: string;
  text?: string;
  styles?: {
    background?: React.CSSProperties | any ;
    input?: React.CSSProperties | any;
    text?: React.CSSProperties | any;
    rectangle?: React.CSSProperties | any;
    triangle?: React.CSSProperties | any;
    circle?: React.CSSProperties | any;
    dottedSquare?: React.CSSProperties | any;
    halfCircle?: React.CSSProperties | any;
  };
};
export default function AuthDesign ({
    triangle,
    rectangle,
    circle,
    halfCircle,
    dottedSquare,
    text = 'Get started with Coraly now and improve your workflow',
    styles = {},
  }: AuthDesignProps){
    return (
        <Box>
          <Typography width="52rem" color="#464356" variant="h4" style={styles.text}>
            {text}
          </Typography>
          <img src={rectangle} alt="rectangle" width="450" style={styles.rectangle} />
          <img src={triangle} alt="triangle" width="300" style={styles.triangle} />
          <img src={circle} alt="circle" width="300" style={styles.circle} />
          <img src={dottedSquare} alt="dottedSquare" width="300" style={styles.dottedSquare} />
          <img src={halfCircle} alt="halfCircle" width="300" style={styles.halfCircle} />
        </Box>
      );

};
