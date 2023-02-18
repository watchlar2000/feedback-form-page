import bubblePurple from "../../../assets/images/cartoon_purple.png";
import bubbleYellow from "../../../assets/images/cartoon_yellow.png";
import bubbleYellowSmall from "../../../assets/images/cartoon_yellow_small.png";
import { BubbleContainer } from "../../components/BubbleContainer";
import { BubbleImgContainer } from "../../components/BubbleImgContainer";
import { FeedbackBlobContainer } from "../../components/FeedbackBlobContainer";
import { FeedbackContainer } from "../../components/FeedbackContainer";
import { FeedbackForm } from "../../components/FeedbackForm";
import { FormWrapper } from "../../components/FeedbackFormWrapper";
import { FeedbackImageContainer } from "../../components/FeedbackImageContainer";
import { Title } from "../../components/Title";
import { useWindowSize } from "../../hooks/useWindowSize";

export function FeedbackPage() {
  const { width: windowWidth } = useWindowSize();

  const isScrollXVisible = () => {
    return windowWidth < 1707; // this is to make sure the map on the right is stick to the right edge of the browser window
  };

  return (
    <FeedbackContainer>
      <FormWrapper>
        <Title>Reach out to us!</Title>
        <FeedbackForm></FeedbackForm>
      </FormWrapper>

      <FeedbackBlobContainer client={isScrollXVisible()}>
        <FeedbackImageContainer></FeedbackImageContainer>
        <BubbleContainer top="50%" left="0" zIndex="10">
          <BubbleImgContainer src={bubbleYellow} alt="yellow bubble" />
        </BubbleContainer>
        <BubbleContainer top="55%" left="0" zIndex="0">
          <BubbleImgContainer src={bubblePurple} alt="yellow bubble" />
        </BubbleContainer>
      </FeedbackBlobContainer>

      <BubbleContainer top="5px" left="20px" zIndex="-50">
        <BubbleImgContainer
          src={bubbleYellowSmall}
          alt="yellow bubble"
          width="125px"
        />
      </BubbleContainer>
    </FeedbackContainer>
  );
}
