import styled, {keyframes} from "styled-components";

export const Button = styled.button`
  all: unset;

  padding: 1rem 2rem;
  background: linear-gradient(90deg, #33D068 0%, #29BACC 100%);
  color: white;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #84E2A6 0%, #81D5E0 118.32%);
  }
`