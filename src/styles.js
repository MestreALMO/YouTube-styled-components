import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  font-size: ${(props) => `${props.fontSize}px`};

  span {
    color: darkred;
    font-size: 14px;
  }
`;

export const TitleGreen = styled(Title)`
  color: green;
`;
