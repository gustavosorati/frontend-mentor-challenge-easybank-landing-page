import styled from "styled-components";
import { Heading } from "../../../../components/Heading";
import { Text } from "../../../../components/Text";

export const Container = styled.section`
  width: 100%;
  background-color: #F4F5F7;
  padding: 4rem 2rem;
`

export const Header = styled.div`
  margin-bottom: 4rem;

  @media (min-width: 376px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled(Heading)`
  max-width: 256px;
  margin: 1rem auto;

  @media (min-width: 376px) {
    margin: unset;
    margin-bottom: 1rem;
    max-width: 100%;
    font-weight: 300;
    font-size: 3rem;
  }
`

export const Description = styled(Text)`
  @media (min-width: 376px) {
    font-size: 1.5rem;
    text-align: start;
    line-height: 32px;
    max-width: 600px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (min-width: 376px) {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`

