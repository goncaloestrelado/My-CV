import { css } from "styled-components";

const lightThemeStyles = css`
  background: linear-gradient(
    0deg,
    rgba(80, 80, 80, 0) 0%,
    rgba(80, 80, 80, 0) 50%,
    rgba(80, 80, 80, 0.85) 100%
  );

  :hover {
    background: rgba(80, 80, 80, 0.8);
    box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.5);
  }
`;

const darkThemeStyles = css`
  background: linear-gradient(
    180deg,
    rgba(141, 141, 141, 0) 0%,
    rgba(141, 141, 141, 0) 50%,
    rgba(141, 141, 141, 0.2) 100%
  );

  :hover {
    background: rgba(141, 141, 141, 0.5);
    box-shadow: 0px 0px 33px 0px rgba(255, 255, 255, 0.5);
  }
`;

export { lightThemeStyles, darkThemeStyles };
