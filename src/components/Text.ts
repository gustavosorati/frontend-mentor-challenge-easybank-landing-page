import styled from "styled-components";

interface Props {
  size?: string;
  color?: string;
}

export const Text = styled.p<Props>`
  text-align: center;
  font-weight: 400;
  font-size: ${({size}) => size ? size : '.875rem'};
  color: ${({color}) => color ? color : '#C9CACE'};
`;