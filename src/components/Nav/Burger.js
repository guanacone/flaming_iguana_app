import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MenuItems from './MenuItems';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 420px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    cursor: pointer;
    width: 2rem;
    height: 0.25rem;
    background: #ccc;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  // close menu on click
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (wrapperRef.current.contains(target)) return setOpen(!open);
    };
    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [open]);

  // close menu with 'esc' key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  }, [open]);

  return (
    <div ref={wrapperRef}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <MenuItems open={open}/>
    </div>
  );
};

export default Burger;
