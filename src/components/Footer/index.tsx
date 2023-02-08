import * as Styled from './styles'

import logoSvg from '../../assets/logo.svg'
import { Button } from '../Button'
import { Text } from '../Text'

export function Footer() {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoSvg} alt="easybank" />

        <Styled.Social>
          <img src="/icon-facebook.svg" alt="facebook" />
          <img src="/icon-youtube.svg" alt="youtube" />
          <img src="/icon-twitter.svg" alt="twitter" />
          <img src="/icon-pinterest.svg" alt="pinterest" /> 
          <img src="/icon-instagram.svg" alt="instagram" /> 
        </Styled.Social>

        <Styled.Nav>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </Styled.Nav>

        <Styled.End>
          <Button>Request Invite</Button>

          <Text color='#9698A6' size='1rem'>Easybank. All Rights Reserved</Text>
        </Styled.End>
      </Styled.Content>
    </Styled.Container>
  )
}