import styled from "styled-components";
import bubbleGreen from "../../assets/images/cartoon_green.png";
import bubblePurple from "../../assets/images/cartoon_purple.png";
import bubbleYellow from "../../assets/images/cartoon_yellow_small.png";
import { device } from "../../utils/breakpoints";
import { BubbleContainer } from "./BubbleContainer";
import { BubbleImgContainer } from "./BubbleImgContainer";
import { FooterSocialLinksList } from "./FooterSocialLinksList";

const FooterContainer = styled.footer`
  position: relative;
  grid-area: "footer";
  background-color: var(--secondary-background);
  color: var(--primary-color);
  border-top: 1px solid var(--border-color);
  font-size: 1rem;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.primary || "white"};

  @media ${device.tablet} {
    padding-left: 350px;
    justify-content: flex-start;
    height: 200px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterSocialLinksList />
      <BubbleContainer top="-35px" left="0">
        <BubbleImgContainer
          src={bubblePurple}
          alt="purple bubble"
          width="140px"
        />
      </BubbleContainer>
      <BubbleContainer top="50px" right="-35px">
        <BubbleImgContainer
          src={bubbleYellow}
          alt="yellow bubble"
          width="100px"
        />
      </BubbleContainer>
      <BubbleContainer top="0" right="150px">
        <BubbleImgContainer src={bubbleGreen} alt="green bubble" display />
      </BubbleContainer>
    </FooterContainer>
  );
}
