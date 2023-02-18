import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAll } from "../../../api/feedback.api";
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
import {
  currentFeedbackSentStatusChanged,
  feedbackListPopulated,
} from "./feedbackSlice";

const Text = styled.h3`
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  :hover {
    color: var(--primary-highlight);
  }
`;

export function FeedbackPage() {
  const dispatch = useDispatch();
  const currentFeedbackSentStatus = useSelector(
    (state) => state.feedbackPage.currentFeedbackSentStatus,
  ); // if true then the greeting message is displayed

  useEffect(() => {
    async function fetchFeedbackList() {
      try {
        const FBlist = await getAll();
        dispatch(feedbackListPopulated(FBlist));
      } catch {
        console.log(
          "Seems like server is not running. Please go to readme file and follow the instructions to set up the server locally and run it on your machine.",
        );
      }
    }

    fetchFeedbackList();
  }, []);

  const { width: windowWidth } = useWindowSize();

  const isScrollXVisible = () => {
    return windowWidth < 1707; // this is to make sure the map on the right is stick to the right edge of the browser window
  };

  const resetCurrentFeedbackStatus = () => {
    dispatch(currentFeedbackSentStatusChanged(false));
  };

  return (
    <FeedbackContainer>
      <FormWrapper>
        {currentFeedbackSentStatus ? (
          <>
            <Title>We appreciate your feedback!</Title>
            <Text onClick={resetCurrentFeedbackStatus}>
              Click here to send another feedback
            </Text>
          </>
        ) : (
          <>
            <Title>Reach out to us!</Title>
            <FeedbackForm></FeedbackForm>
          </>
        )}
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
