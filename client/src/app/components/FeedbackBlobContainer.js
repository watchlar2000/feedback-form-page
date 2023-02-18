import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const FeedbackBlobContainer = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${(props) => (props.client ? "hidden" : "visible")};

  @media ${device.tablet} {
    display: block;
  }
`;
