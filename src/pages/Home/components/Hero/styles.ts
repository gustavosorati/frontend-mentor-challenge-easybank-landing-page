import styled from "styled-components";
import { Heading } from "../../../../components/Heading";
import { Text } from "../../../../components/Text";

type ScreenProps = {
  resolution: number;
}

export const Container = styled.div`
  width: 100%;
  padding-top: 3rem;
  background: url('./bg-intro-mobile.svg') no-repeat fixed right top;
  margin-bottom: 4rem;

  img {
    width: 100%;
    margin-top: -130px;
  }

  @media (min-width: 768px) {
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
      max-width: 520px;
      position: relative;
      right: -120px;
    }
  } 
  
  @media (min-width: 769px) {
    background-position: 700px -60px;
    
    img {
      max-width: 770px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 2rem;
  
  @media (min-width: 560px) {
    margin-left: max(520px, 10%);

    align-items: flex-start;
    justify-content: flex-start;
    max-width: 428px;
  }
`

export const HeroHeading = styled(Heading)`
  text-align: center;

  @media (min-width: 560px) {
    font-size: 3rem;
    font-weight: 300;
    text-align: start;
  }
`

export const HeroText = styled(Text)`
  text-align: justify;
  margin-bottom: 2rem;

  @media (min-width: 560px) {
    font-size: 1rem;
    font-weight: 300;
    text-align: start;
  }
`