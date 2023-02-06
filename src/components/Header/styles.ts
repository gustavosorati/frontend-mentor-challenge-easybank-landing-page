import styled, { keyframes, css } from "styled-components";


export const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  box-shadow: 0px 0 15px -3px rgba(0,0,0,0.1);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: 10;
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`


const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  } 
  to {
    opacity: 1;
    transform: translateY(0);
  }
  
`

const hide = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  } 
  to {
    opacity: 0;
    transform: translateY(-60px);
  }
  
`

interface CardProps {
  isOpen: boolean;
}

export const Modal = styled.div`
  background-color: rgba(0,0,0,.3);
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 6;
`

export const Card = styled.div<CardProps>`
  position: absolute;
  top: calc(100% + 1rem);

  min-width: 327px;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  z-index: 10;
  
  background-color: red;
  border-radius: 6px;

  ${({isOpen}) => isOpen 
    ? css`
        animation: ${show} 600ms ease forwards;
      ` 
    : css`
      animation: ${hide} 600ms ease forwards;
    `
  }
`