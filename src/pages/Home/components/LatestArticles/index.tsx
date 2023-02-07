
import { Feature } from './Article'
import * as Styled from './styles'

import moneyImage from '../../../../assets/image-currency.jpg';
import restaurantImage from '../../../../assets/image-restaurant.jpg';
import airplaceImage from '../../../../assets/image-plane.jpg';
import confettiImage from '../../../../assets/image-confetti.jpg';

const schemaArticles = [
  {
    id: '1',
    author: 'Claire Robinson',
    title: "Receibe money in any currency with no fees",
    description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a sing...",
    image: moneyImage
  },
  {
    id: '2',
    author: 'Wilson Hutton',
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    image: restaurantImage
  },
  {
    id: '3',
    author: 'Wilson Hutton',
    title: "Take your Easybank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don't chage any fees on purchases while you're abroad. We'll even show ...",
    image: airplaceImage
  },
  {
    id: '4',
    author: 'Claire Robinson',
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard workd by the whole team we're excited to launch our closed beta. It's easy to request an invite throught the site ...",
    image: confettiImage
  },
]

export function LatestArticles() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeadingArticle>Latest Articles</Styled.HeadingArticle>      

        <Styled.ArticleSection>
          {schemaArticles.map(feature => {
            return (
              <Feature 
                key={feature.id}
                id={Number(feature.id)}
                author={feature.author}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            )
          })}
        </Styled.ArticleSection>
      </Styled.Content>
    </Styled.Container>
  )
}