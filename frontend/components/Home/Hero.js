import Image from 'next/image';
import React from 'react';
import HeroD from '../../public/HeroD.png';
import HeroM from '../../public/HeroM.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
        maxWidth: '100vw',
      }}
    >
      <img
        src={matchesSM ? HeroM.src : HeroD.src}
        style={{
          width: matchesSM ? '100vw' : '70vw',
        }}
      />
    </div>
  );
}
