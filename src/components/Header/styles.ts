import styled, { keyframes, css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: sticky;
  background-color: #fff;  
  box-shadow: 0px 0 15px -3px rgba(0,0,0,0.4);
  z-index: 100;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 1440px;
    margin: 0 auto;
  }
`

// Menu
interface MenuProps {
  isOpen: boolean;
}

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  } 
  to {
    opacity: 1;
    transform: translateY(0);
  }
  
`;

const hide = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  } 
  to {
    opacity: 0;
    transform: translateY(-60px);
    visibility: hidden;
  }
`;

export const Menu = styled.div<MenuProps>`
  position: absolute;
  top: calc(100% + 1rem);
  left: 24px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  
  min-width: 327px;
  max-width: 327px;
  z-index: 10; 

  ${({isOpen}) => isOpen 
    ? css`
      animation: ${show} 600ms ease forwards;
    ` 
    : css`
      animation: ${hide} 600ms ease forwards;
    `
  }

  a {
    padding: 1rem 0;
    color: #a7a7a7;
  }

  @media (min-width: 768px) {
    position: unset;
    animation: unset;
    flex-direction: row;
    
    a {
      display: flex;
      border-bottom: 3px solid transparent;
      padding: 2rem 0;
      margin: 0 1.2rem;
      position: relative;
      
      &:hover {
        color: #2D2D44;
      }

      &:hover::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;


        width: 100%;
        height: 3px;
         background: linear-gradient(90deg, #33D068 0%, #29BACC 100%);;
      }
    }
  }
`

export const Modal = styled.div`
  background-color: rgba(0,0,0,.3);
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 6;
`