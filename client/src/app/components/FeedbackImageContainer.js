import styled from "styled-components";
import mapImg from "../../assets/images/map.png";

export const FeedbackImageContainer = styled.div`
  position: absolute;
  left: 45px;
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
