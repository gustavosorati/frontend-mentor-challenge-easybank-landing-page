import { useState } from "react";
import { Button } from "../../../../components/Button";
import * as Styled from "./styles";
import mockup from '/image-mockups.png'

export function Hero() {
  

  return (
    <Styled.Container>
      <img src={mockup} />

      <Styled.Content>
        <Styled.HeroHeading as="h1">Next generation digital banking</Styled.HeroHeading>

        <Styled.HeroText>
          Take your financial life online. Your Easybank account will be a one-stop-shopfor spending, saving, budgeting, investing, and much more.
        </Styled.HeroText>

        <Button>Request invite</Button>
      </Styled.Content>
    </Styled.Container>
  )
}