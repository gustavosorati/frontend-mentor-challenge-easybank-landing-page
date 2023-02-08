import * as Styled from './styles'

interface Props {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
}


export function Feature({id, author, title, description, image}: Props) {
  return (
    <Styled.Container data-aos="fade-up" data-aos-delay={100 * id}>
      <img src={image} alt={title} />
      
      <Styled.Post>
        <Styled.Author>{author}</Styled.Author>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Post>

    </Styled.Container>
  )
}