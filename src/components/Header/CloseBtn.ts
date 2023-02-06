import styled, { css, keyframes } from "styled-components";

interface Props {
  isActive: boolean;
}

const openTop = keyframes`
  from {
    transform: rotate(0) translateY(0) translateX(0);
  }
  to {
    transform: rotate(-45deg) translateY(4px) translateX(0);
  }
`

const openDown = keyframes`
  from {
    transform: rotate(0) translateY(0) translateX(0);
  }
  to {
    transform: rotate(45deg) translateY(-5px) translateX(-1px);
  }
`

const closeTop = keyframes`
  from {
    transform: rotate(-45deg) translateY(4px) translateX(0);
  }
  to {
    transform: rotate(0) translateY(0) translateX(0);
  }
`

const closeDown = keyframes`
  from {
    transform: rotate(45deg) translateY(-5px) translateX(-1px);
  }
  to {
    transform: rotate(0) translateY(0) translateX(0);
  }
`


function openMenu(position: 'top' | 'down') {
  if(position === 'top') {
    return css`
      animation: ${openTop} 200ms linear forwards;
    `
  }

  return css`
    animation: ${openDown} 200ms linear forwards;
  `
}

function closeMenu(position: 'top' | 'down') {
  if(position === 'top') {
    return css`
      animation: ${closeTop} 200ms linear forwards;
    `
  }

  return css`
    animation: ${closeDown} 200ms linear forwards;
  `
}

export const Close = styled.button<Props>`
  all: unset;
  width: 22px;
  height: 1px;
  background-color: #333;
  position: relative;
  cursor: pointer;
  z-index: 10;


  height: ${({isActive}) => isActive ? 0 : '1px'};

  &::before, &::after {
    content: '';
    position: absolute;
    
    width: 100%;
    height: 1px;
    background-color: inherit;
  }

  &::before {
    top: -4px;

    ${({isActive}) => isActive ? openMenu("top") : closeMenu('top') };
  }

  &::after {
    top: 4px;
    ${({isActive}) => isActive ? openMenu("down") : closeMenu("down") };
  }
`
