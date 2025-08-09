import styled from "styled-components";
import { IoMdSchool } from "react-icons/io";

export function EducationCard() {
  return (
    <Container>
      <Content>
        <img className="w-10 mx-4" src="/images/png-transparent-ironhack.png" alt="Ironhack_logo" />
        <div className="flex flex-col">
          <p className="text-lg font-bold">Education</p>
          <Span>400+ hours Ironhack Bootcamp</Span>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #217db8;
  border-radius: 9999px;
  margin-bottom: 10px;
  width: 15rem;
  height: 4rem;
  @media (min-width: 430px) {
    width: 24rem;
    height: 6rem;
  }
`;

const Content = styled.div`
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 10px;
  @media (min-width: 430px) {
    font-size: 16px;
  }
`;
