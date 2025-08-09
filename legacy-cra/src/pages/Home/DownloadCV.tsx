import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AiFillFilePdf } from "react-icons/ai";
import { darkThemeStyles, lightThemeStyles } from "./ThemeStyles";
import { slideInBottom } from "./animations";
import { Button } from "../../components/Button";

export function DownloadCV() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Link
      href="https://drive.google.com/file/d/1g5aKBIfFTY7h_cD5XLW4kq9agnZyg3-U/view"
      target="_blank"
      rel="noreferrer"
      lightMode={lightMode}
    >
      <Button>
        <AiFillFilePdf />
        Curriculum Vitae
      </Button>
    </Link>
  );
}

const Link = styled.a<{ lightMode: boolean }>`
  /* ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)} */
  color: white;
  border: none;
  padding: 6px 30px;
  font-size: 2rem;
  border-radius: 30px;
  margin-top: 10px;
  font-style: italic;
  display: flex;
  align-items: center;
  svg {
    margin-right: 13px;
  }
  animation: ${slideInBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.6s both;
`;
