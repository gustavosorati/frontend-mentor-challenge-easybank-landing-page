import * as Styled from './styles'
import logoSvg from '../../assets/logo.svg'
import { useState } from 'react'
import { Close } from './CloseBtn';

export function Header() {
  const [isActive, setIsActive] = useState(false)

  function changeVisibilyMenu() {
    setIsActive((state) => !state);
  }

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
        
        <Close  
          isActive={isActive}
          onClick={changeVisibilyMenu}
        />       
      </Styled.Content>

      {/* <Styled.Modal /> */}
    </Styled.Container>
  )
}