import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const BubbleImgContainer = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${(props) => (props.width ? props.width : "")};
  display: ${(props) => (props.display ? props.display : "block")};

  @media ${device.tablet} {
    width: auto;
    display: block;
  }
`;
