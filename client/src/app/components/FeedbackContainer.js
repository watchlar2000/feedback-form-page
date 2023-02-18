import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const FeedbackContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 20;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
