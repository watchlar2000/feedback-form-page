import styled from "styled-components";

export const FeedbackTextarea = styled.textarea`
  line-height: 180%;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 18px;
  height: 150px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--white);
  ::placeholder {
    color: var(--secondary-font);
    opacity: 1;
  }
  :focus::placeholder {
    opacity: 0.5;
  }
`;
