import React from "react";

export default function ProblemLines(props) {
  const jump = 1.8;
  return (
    <>
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 1387) / jump
        } ${(props.startY + 267) / 2}, 1387 267`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 1387) / jump
        } ${(props.startY + 339) / 2}, 1387 339`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      

      <circle cx={props.startX} cy={props.startY} r={props.r} fill="white" />
      <circle cx="1387" cy="267" r="26" fill="white"></circle>
      <circle cx="1387" cy="339" r="26" fill="white"></circle>
    </>
  );
}
