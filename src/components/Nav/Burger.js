import React, { useEffect, useState } from 'react';
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
  // close menu on click
  useEffect(() => {
    const container = document.querySelector('#container');

    const clickHandler = ({ target }) => {
      if (container.contains(target)) return setOpen(!open);
    };
    document.addEventListener('click', clickHandler);

    // these functions clean up the event listeners
    return () => document.removeEventListener('click', clickHandler);
  });
  // close menu with 'esc' key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <MenuItems open={open}/>
    </>
  );
};

export default Burger;
