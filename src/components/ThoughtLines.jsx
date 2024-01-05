import React from "react";

export default function Lines(props) {
    const jump = 1.9;
    const jump_y = 3;
  return (
    <>
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) / jump} ${
          (props.startY + 105.5) / jump_y
        }, 1014.5 105.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) / jump} ${
          (props.startY + 176) / jump_y
        }, 1014.5 176`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) / jump} ${
          (props.startY + 246.5) / jump_y
        }, 1014.5 246.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) / jump} ${
          (props.startY + 326.5) / jump_y
        }, 1014.5 326.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) /jump} ${
          (props.startY + 399) / jump_y
        }, 1014.5 399`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 1014.5) /jump} ${
          (props.startY + 475.5) / jump_y
        }, 1014.5 475.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />

      <circle cx={props.startX} cy={props.startY} r={props.r} fill="white" />
      <circle cx="1014.5" cy="105.5" r="28.5" fill="white"></circle>
      <circle cx="1015" cy="176" r="21" fill="white"></circle>
      <circle cx="1014.5" cy="246.5" r="28.5" fill="white"></circle>
      <circle cx="1016.5" cy="326.5" r="30.5" fill="white"></circle>
      <circle cx="1015" cy="399" r="21" fill="white"></circle>
      <circle cx="1016.5" cy="475.5" r="30.5" fill="white"></circle>
    </>
  );
}
