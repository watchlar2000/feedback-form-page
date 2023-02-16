import { useState } from "react";
import styled from "styled-components";
import bubblePurple from "../../../assets/images/cartoon_purple.png";
import bubbleYellow from "../../../assets/images/cartoon_yellow.png";
import bubbleYellowSmall from "../../../assets/images/cartoon_yellow_small.png";
import mapImg from "../../../assets/images/map.png";
import { device } from "../../../utils/breakpoints";
import { BubbleContainer } from "../../components/BubbleContainer";
import { BubbleImgContainer } from "../../components/BubbleImgContainer";
import { Button } from "../../components/Button";
import { useClientWindowSize } from "../../hooks/useClientWindowSize";
import { useWindowSize } from "../../hooks/useWindowSize";

const FeedbackContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  line-height: 130%;
  z-index: 10;
`;

const BlobContainer = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${(props) => (props.isHidden ? "hidden" : "")};

  @media ${device.tablet} {
    display: block;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${mapImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 10px;
  background-position-x: -400px;
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  padding: 0 20px;

  @media ${device.tablet} {
    margin-right: 50px;
  }

  @media ${device.desktop} {
    padding: 0;
  }
`;

const Input = styled.input`
  line-height: 180%;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 18px;
  color: var(--secondary-font);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  ::placeholder {
    color: var(--secondary-font);
    opacity: 1;
  }
  :focus::placeholder {
    opacity: 0.5;
  }
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Textarea = styled.textarea`
  line-height: 180%;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 18px;
  height: 150px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);

  ::placeholder {
    color: var(--secondary-font);
    opacity: 1;
  }
  :focus::placeholder {
    opacity: 0.5;
  }
`;

export function FeedbackPage() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const sizeWindow = useWindowSize();
  const sizeClientWindow = useClientWindowSize();

  const handleForm = (e) => {
    const { name, value } = e.target;

    setFeedbackData({
      ...feedbackData,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    console.log(feedbackData);
  };

  const { name, email, msg } = feedbackData;

  return (
    <FeedbackContainer>
      <FormWrapper>
        <Title>Reach out to us!</Title>
        <FormGroup>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleForm}
            placeholder="Your name*"
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleForm}
            placeholder="Your email*"
          />
          <Textarea
            type="text"
            name="msg"
            value={msg}
            onChange={handleForm}
            placeholder="Your message*"
          />
          <Button onClick={submit} radius="50%" marginTop="12px">
            Send message
          </Button>
        </FormGroup>

        {/* <h3>{sizeClientWindow.width - sizeWindow.width}</h3> */}
      </FormWrapper>
      <BlobContainer isHidden={true}>
        <ImageContainer></ImageContainer>
        <BubbleContainer top="50%" left="0" zIndex="10">
          <BubbleImgContainer src={bubbleYellow} alt="yellow bubble" />
        </BubbleContainer>
        <BubbleContainer top="55%" left="0" zIndex="0">
          <BubbleImgContainer src={bubblePurple} alt="yellow bubble" />
        </BubbleContainer>
      </BlobContainer>

      <BubbleContainer top="5px" left="20px">
        <BubbleImgContainer
          src={bubbleYellowSmall}
          alt="yellow bubble"
          width="125px"
        />
      </BubbleContainer>
    </FeedbackContainer>
  );
}
