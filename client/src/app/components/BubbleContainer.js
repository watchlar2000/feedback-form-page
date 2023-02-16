import styled from "styled-components";

export const BubbleContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top || ""};
  bottom: ${(props) => props.bottom || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "")};
`;
