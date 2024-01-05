import React from "react";

export default function Lines(props) {
    const jump_x = 2;
    const jump_y = 2.5;
  return (
    <>
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 340) / jump_x} ${
          (props.startY + 156) / jump_y
        }, 340 156`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 340) / jump_x} ${
          (props.startY + 242) / jump_y
        }, 338 242`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 340) / jump_x} ${
          (props.startY + 324.5) / jump_y
        }, 337 324.5`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 340) / jump_x} ${
          (props.startY + 406) / jump_y
        }, 338 406`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />
      <path
        d={`M${props.startX + props.r} ${props.startY} Q${(props.startX + 340) /jump_x} ${
          (props.startY + 497) / jump_y
        }, 338 497`}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth="1"
      />

      <circle cx={props.startX} cy={props.startY} r={props.r} fill="white" />
      <circle cx="340" cy="156" r="25" fill="white" />
      <circle cx="338" cy="242" r="27" fill="white" />
      <ellipse cx="337" cy="324.5" rx="19" ry="18.5" fill="white" />
      <circle cx="338" cy="406" r="25" fill="white" />
      <circle cx="338" cy="497" r="27" fill="white" />
    </>
  );
}
