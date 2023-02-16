import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Button = styled.button`
  height: 73px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-highlight);
  color: var(--white);
  font-size: 18px;
  padding: 1.5rem;
  border-radius: 40px;
  transition: all 0.15s ease-in-out;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};

  :hover {
    color: var(--primary-font);
  }

  @media ${device.laptop} {
    width: 218px;
  }
`;
