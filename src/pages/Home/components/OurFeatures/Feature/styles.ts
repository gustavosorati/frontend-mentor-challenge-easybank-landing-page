import {motion} from 'framer-motion'


import styled from "styled-components";
import { Heading as HeadingComponent } from "../../../../../components/Heading";
import { Text as TextComponent } from "../../../../../components/Text";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;

  img {
    max-width: 68px;
    max-height: 68px;
    margin-bottom: 32px;
  }

  @media (min-width: 376) {
    align-items: flex-start;
    
  }
`

export const Heading = styled(HeadingComponent)`
  @media (min-width: 376px) {
    font-size: 2rem;
    font-weight: 300;
  }
`

export const Text = styled(TextComponent)`
  @media (min-width: 376px) {
    text-align: justify;
    font-size: 1rem;
    line-height: 24px;
    padding: 0 1rem;

  }
`