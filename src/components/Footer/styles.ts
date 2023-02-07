import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: #2D314E;

  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 2rem;
  padding-bottom: 3rem;
  
  @media (min-width: 376px) {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-areas: 
      "logo   nav end"
      "social nav end"
    ;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 150px 1fr 1fr;
    column-gap: 10rem;
  }
`

export const Social = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 12px;

  @media (min-width: 376px) {
    grid-area: social;
  }

  img:hover {
    color: red;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  a {
    all: unset;
    text-align: center;
    color: white;
  }

  @media (min-width: 376px) {
    grid-area: nav;

    display: grid;
    grid-template-columns: 1fr 1fr;
    
    a {
      text-align: start
    }
  }
`

export const End = styled.div`
  @media (min-width: 376px) {
    grid-area: end;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 2rem
  
  }
`