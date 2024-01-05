import React from "react";

export default function ProblemLines(props) {
  const jump = 2.5;
  return (
    <>
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 702.5) / jump
        } ${(props.startY + 220.5) / 2}, 702.5 220.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 702.5) / jump
        } ${(props.startY + 290) / 2}, 702.5 290.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 702.5) / jump
        } ${(props.startY + 357.5) / 2}, 702.5 357.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${
          (props.startX + 702.5) / jump
        } ${(props.startY + 424.5) / 2}, 720.5 424.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />

      <circle cx={props.startX} cy={props.startY} r={props.r} fill="white" />
      <circle cx="702.5" cy="220.5" r="25.5" fill="white"></circle>
      <circle cx="702.5" cy="290.5" r="25.5" fill="white"></circle>
      <ellipse cx="705" cy="357.5" rx="19" ry="18.5" fill="white"></ellipse>
      <circle cx="706.5" cy="424.5" r="25.5" fill="white"></circle>
    </>
  );
}
