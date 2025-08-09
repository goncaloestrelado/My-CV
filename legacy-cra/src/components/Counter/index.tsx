import { useState, useEffect } from "react";
import styled from "styled-components";

function padTo2Digits(num: number) {
  return String(num).padStart(2, "0");
}
interface CountUpProps {
  startTime: Date;
  isFinished: boolean;
}

export function Counter({ startTime, isFinished }: CountUpProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeDifference = (currentTime.getTime() - startTime.getTime()) as number;

  const seconds = padTo2Digits(Math.floor((timeDifference / 1000) % 60));
  const minutes = padTo2Digits(Math.floor((timeDifference / 1000 / 60) % 60));
  const hours = padTo2Digits(Math.floor(timeDifference / (1000 * 60 * 60)) % 24);
  const days = padTo2Digits(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));

  return (
    <Container>
      <Wrapper>
        <h3>Time since start: </h3>
        <div style={{ display: "flex" }}>
          <div>
            <p>{days}</p>
            <p>days</p>
          </div>
          <div>
            <p>{hours}</p>
            <p>hours</p>
          </div>
          <div>
            <p>{minutes}</p>
            <p>minutes</p>
          </div>
          <div>
            <p>{seconds}</p>
            <p>seconds</p>
          </div>
        </div>
        <h3>{!isFinished ? ", still in development." : ", now finished."}</h3>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-left: -1rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    margin: 0 10px;
  }
  font-size: calc(5px + min(1vw, 5px));

  @media (min-width: 805px) {
    flex-direction: row;
  }
`;
