import * as Styled from './styles'

interface Props {
  title: string;
  description: string;
  image: string;
}


export function Feature({title, description, image}: Props) {
  return (
    <Styled.Container data-aos="fade-up" data-aos-delay={100}>
      <img src={image} alt={title} />
      <Styled.Heading as="strong" size='20px'>{title}</Styled.Heading>
      <Styled.Text color='#B4B4BB'>{description}</Styled.Text>
    </Styled.Container>
  )
}