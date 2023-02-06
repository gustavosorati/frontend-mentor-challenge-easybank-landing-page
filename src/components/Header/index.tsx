import * as Styled from './styles'
import logoSvg from '../../assets/logo.svg'
import { useState } from 'react'
import { Close } from './CloseBtn';

export function Header() {
  const [isActive, setIsActive] = useState(true)

  function changeVisibilyMenu() {
    setIsActive((state) => !state);
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoSvg} alt="easy bank" />
      
        <Styled.Card isOpen={isActive}>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Careers</p>
        </Styled.Card>
        
        <Styled.Menu 
          onClick={changeVisibilyMenu}
        >
          <Close isActive={isActive} />       
        </Styled.Menu>
      </Styled.Content>

      <Styled.Modal />
    </Styled.Container>
  )
}