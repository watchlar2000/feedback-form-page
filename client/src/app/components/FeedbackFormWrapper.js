import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  padding: 60px 20px;

  @media ${device.laptop} {
    padding-left: 50px;
  }

  @media ${device.laptopL} {
    margin-right: 50px;
    padding-left: 200px;
  }
`;
