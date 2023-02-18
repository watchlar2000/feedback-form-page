import styled from "styled-components";

export const ErrorSpan = styled.span`
  color: red;
`;

export const ErrorMsg = (props) => {
  const { msg } = props;

  return <ErrorSpan>{msg || "Error"}</ErrorSpan>;
};
