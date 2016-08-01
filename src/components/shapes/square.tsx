import * as React from "react";
import * as models from "../../models/shapes/square.ts";

export interface SquareProps {
  shape: models.Square;
}

export class Square extends React.Component<SquareProps, {}> {
  render() {
    let {shape} = this.props;

    return <rect x={shape.x - shape.size / 2} y={shape.y - shape.size / 2} width={shape.size} height={shape.size} fill={shape.color} />;
  }
}