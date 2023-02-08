import * as Styled from './styles'
import logoSvg from '../../assets/logo.svg'
import { useState } from 'react'
import { Close } from './CloseBtn';
import { Button } from '../Button';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  
  function changeVisibilyMenu() {
    setIsActive((state) => !state);
  }

  const { innerWidth } = window;
  const [screenWidth, setScreenWidth] = useState(innerWidth > 375 ? true : false);

  function handleResizeScreen() {
    const { innerWidth } = window;
    const isDesktop = innerWidth > 375 ? true : false
    setScreenWidth(isDesktop)
  }

  window.onresize = handleResizeScreen;

  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoSvg} alt="easy bank" />
      
        <Styled.Menu isOpen={isActive}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </Styled.Menu>
        
        {screenWidth ? (
          <Button>Request Invite</Button>
        ) : (
          <Close  
            isActive={isActive}
            onClick={changeVisibilyMenu}
          />     
        )}  
      </Styled.Content>

      {/* <Styled.Modal /> */}
    </Styled.Container>
  )
}