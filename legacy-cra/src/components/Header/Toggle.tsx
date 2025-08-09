import styled from "styled-components";
import { BsMoonFill, BsSun } from "react-icons/bs";

interface IToggleProps {
  checked: boolean;
  onToggle: () => void;
}

export function Toggle({ checked, onToggle }: IToggleProps) {
  return (
    <ToggleContainer onClick={onToggle}>{!checked ? <BsMoonFill /> : <BsSun />}</ToggleContainer>
  );
}

const ToggleContainer = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.95);
  }
  max-height: 40px;
`;
