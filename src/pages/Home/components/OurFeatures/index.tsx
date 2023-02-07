
import { Feature } from './Feature'
import { Heading } from '../../../../components/Heading'
import * as Styled from './styles'

import onlineBanking from '../../../../assets/icon-online.svg';
import simpleBudgeting from '../../../../assets/icon-budgeting.svg';
import openApi from '../../../../assets/icon-api.svg';
import fastOnboarding from '../../../../assets/icon-onboarding.svg';
import { Text } from '../../../../components/Text';

const schemaFeatures = [
  {
    id: '1',
    title: "Online Banking",
    description: "Our modem web and mobile applications allow you to keep track of your finances herever you are in the world",
    image: onlineBanking
  },
  {
    id: '2',
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    image: simpleBudgeting
  },
  {
    id: '3',
    title: "Fast Onboarding",
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: openApi
  },
  {
    id: '4',
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    image: fastOnboarding
  },
]

export function OurFeatures() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Why choose EasyBank?</Styled.Title>
        <Styled.Description>We leverage Open banking to turn your bank account into your financial hub. Control your finances likes never before.</Styled.Description>
      </Styled.Header>
      
      <Styled.Content>
        {schemaFeatures.map(feature => {
          return (
            <Feature 
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          )
        })}
      </Styled.Content>
    </Styled.Container>
  )
}