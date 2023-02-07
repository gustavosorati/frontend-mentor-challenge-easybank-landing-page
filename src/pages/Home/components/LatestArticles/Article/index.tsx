import * as Styled from './styles'

interface Props {
  title: string;
  description: string;
  image: string;
}


export function Feature({title, description, image}: Props) {
  return (
    <Styled.Container>
      <img src={image} alt="" />
      
      <Styled.Post>
        <Styled.Author>By Claire Robinson</Styled.Author>
        <Styled.Title>Receive money in any currency with no fees</Styled.Title>
        <Styled.Description>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a sing...</Styled.Description>
      </Styled.Post>

    </Styled.Container>
  )
}