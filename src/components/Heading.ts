import styled from "styled-components";

interface Props {
  size?: string;
}

export const Heading = styled.h2.attrs<Props>(({size, ...props}) => ({
  ['data-aos']: 'slide-left'
}))<Props>`
  color: #2D2D44;
  margin-bottom: 1rem;
  text-align: center;

  font-size: ${({size}) => size ? size : '1.8rem'};
`;