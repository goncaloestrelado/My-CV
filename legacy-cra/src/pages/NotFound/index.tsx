import { Link } from "react-router-dom";
import styled from "styled-components";

export function NotFound() {
  return (
    <Container>
      <h1>Page NotFound</h1>
      <Link to="/">Return to Home</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
