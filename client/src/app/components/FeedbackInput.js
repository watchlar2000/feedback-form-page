import styled from "styled-components";

export const FeedbackInput = styled.input`
  line-height: 180%;
  padding: 1rem 2rem;
  font: inherit;
  font-size: 18px;
  color: var(--secondary-font);
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
