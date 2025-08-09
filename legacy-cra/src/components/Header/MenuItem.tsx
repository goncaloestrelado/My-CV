import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  to: string;
  label: string;
  handleOpen: () => void;
}

export default function MenuItem({ to, label, handleOpen }: Props) {
  return (
    <NavLink to={`${to}`} onClick={handleOpen}>
      <h1>{label}</h1>
    </NavLink>
  );
}

const NavLink = styled(Link)`
  margin: 0 30px;
  &:hover {
    text-decoration-line: underline;
    text-decoration-style: "solid";
    text-decoration-color: rgba(255, 255, 255, 1);
    text-decoration-thickness: 3px;
  }
  &.active {
    font-weight: bold;
    color: yellow;
  }
  @media (max-width: 425px) {
    font-size: 4rem;
  }
`;
