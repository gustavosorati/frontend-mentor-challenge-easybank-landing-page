import styled from "styled-components";
import { Heading } from "../../../../components/Heading";

export const Container = styled.section`
  width: 100%;
  background-color: #fafafa;
  padding: 2rem;
`

export const Content = styled.div`
  @media (min-width: 376px){
    max-width: 1440px;
    margin: 0 auto;
  }
`

export const HeadingArticle = styled(Heading)`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 376px){
    text-align: start;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }
`

export const ArticleSection = styled.section`
  @media (min-width: 376px){
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    flex-wrap: wrap;
  }
`