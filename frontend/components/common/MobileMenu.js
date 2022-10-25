import React, { useEffect, useState } from 'react';

export default function MobileMenu({ setOpenMenu }) {
  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState({});
  const [hamTop, setHamTop] = useState({});
  const [hamMiddle, setHamMiddle] = useState({});
  const [hamBot, setHamBot] = useState({});

  useEffect(() => {
    if (open) {
      setOpenClass({
        transform: 'rotate(90deg)',
        transform: 'translateY(0px)',
      });

      setHamTop({
        transform: 'rotate(45deg) translateY(6px) translateX(6px)',
        // background: '#fff',
      });

      setHamMiddle({
        display: 'none',
      });

      setHamBot({
        transform: 'rotate(-45deg) translateY(6px) translateX(-6px)',
        // background: '#fff',
      });
    } else {
      setOpenClass({});
      setHamTop({});
      setHamMiddle({});
      setHamBot({});
    }
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
    setOpenMenu(!open);
  };

  return (
    <>
      <button
        className="z-30 block md:hidden focus:outline-none"
        style={{
          cursor: 'pointer',
          width: '24px',
          height: '24px',
          transition: 'all 0.25s',
          position: 'relative',
          border: '0',
          background: '#fff',
        }}
        onClick={handleClick}
      >
        <span
          style={{
            content: '',
            position: 'absolute',
            width: '24px',
            height: '3px',
            top: 0,
            left: 0,
            background: '#000',
            transform: 'rotate(0)',
            transition: 'all 0.5s',
            ...openClass,
            ...hamTop,
          }}
        ></span>
        <span
          style={{
            content: '',
            position: 'absolute',
            width: '24px',
            height: '3px',
            top: 0,
            left: 0,
            background: '#000',
            transform: 'rotate(0)',
            transition: 'all 0.5s',
            transform: 'translateY(7px)',
            ...openClass,
            ...hamMiddle,
          }}
        ></span>
        <span
          style={{
            content: '',
            position: 'absolute',
            width: '24px',
            height: '3px',
            top: 0,
            left: 0,
            background: '#000',
            transform: 'rotate(0)',
            transition: 'all 0.5s',
            transform: 'translateY(14px)',
            background: '#000',
            ...openClass,
            ...hamBot,
          }}
        ></span>
      </button>
    </>
  );
}
