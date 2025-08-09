"use client";

import { useState, useEffect } from "react";

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
    <div className="-ml-4">
      <div className="flex flex-col lg:flex-row justify-center items-center text-[calc(5px+min(1vw,5px))]">
        <h3>Time since start: </h3>
        <div className="flex">
          <div className="text-center mx-2.5">
            <p>{days}</p>
            <p>days</p>
          </div>
          <div className="text-center mx-2.5">
            <p>{hours}</p>
            <p>hours</p>
          </div>
          <div className="text-center mx-2.5">
            <p>{minutes}</p>
            <p>minutes</p>
          </div>
          <div className="text-center mx-2.5">
            <p>{seconds}</p>
            <p>seconds</p>
          </div>
        </div>
        <h3>{!isFinished ? ", still in development." : ", now finished."}</h3>
      </div>
    </div>
  );
}
