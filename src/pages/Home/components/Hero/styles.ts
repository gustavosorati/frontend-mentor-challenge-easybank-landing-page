import styled from "styled-components";
import { Heading } from "../../../../components/Heading";
import { Text } from "../../../../components/Text";

type ScreenProps = {
  resolution: number;
}

export const Container = styled.div<ScreenProps>`
  width: 100%;
  padding-top: 3rem;
  background: url('./bg-intro-mobile.svg') no-repeat;
  margin-bottom: 4rem;

  img {
    width: 100%;
    margin-top: -130px;
  }

  @media (min-width: 376px) {
    max-width: 1440px;
    margin: 0 auto;
    background: url('./bg-intro-desktop.svg') no-repeat fixed 100% 30%;
    width: 100%;
    height: 650px;
    margin-bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    img {
      margin-top: 100px;
      max-width: 770px;
      position: relative;
      right: -120px;
    }
  }  
`

export const Content = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 2rem;
  
  @media (min-width: 376px) {
    margin-left: ;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 428px;
  }
`

export const HeroHeading = styled(Heading)`
  text-align: center;

  @media (min-width: 376px) {
    font-size: 3rem;
    font-weight: 300;
    text-align: start;
  }
`

export const HeroText = styled(Text)`
  text-align: justify;
  margin-bottom: 2rem;

  @media (min-width: 376px) {
    font-size: 1rem;
    font-weight: 300;
    text-align: start;
  }
`