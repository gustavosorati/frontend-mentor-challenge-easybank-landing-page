import styled from "styled-components";
import { Heading } from "../../../../../components/Heading";
import { Text } from "../../../../../components/Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  
  background-color: #fff;

  margin-bottom: 2rem;
  border-radius: 6px;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export const Post = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;

  padding: 2rem;
`

export const Author = styled(Text)`
  font-size: 8px;
  text-align: start;

  @media (min-width: 376px) {
    font-size: 12px;
  }
`

export const Title = styled(Heading)`
  font-size: 1rem;
  margin: 8px 0;
  text-align: start;

  @media (min-width: 376px) {
    font-size: 1.5rem;

    &:hover {
      color: #33D068;
    }
  }
`


export const Description = styled(Text)`
  font-size: 12px;
  text-align: start;

  @media (min-width: 376px) {
    font-size: 1rem;
  }
`