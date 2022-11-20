import Image from 'next/image';
import React from 'react';
import HeroD from '../../public/HeroD.png';
import HeroM from '../../public/HeroM.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div
      style={{
        // width: '100vw',
        // height: '80vh',
        // background: `url(${HeroD.src})`,
        // backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '4rem',
        marginTop: '4rem',
      }}
    >
      <img
        src={matchesMD ? HeroM.src : HeroD.src}
        style={{
          width: matchesMD ? '56vh' : '70vw',
        }}
      />
    </div>
  );
}
