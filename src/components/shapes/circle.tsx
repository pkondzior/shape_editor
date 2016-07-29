import * as React from "react";
import * as models from "../../models/shapes/circle.ts";

export interface CircleProps {
  shape: models.Circle;
}

export class Circle extends React.Component<CircleProps, {}> {
  render() {
    const {shape} = this.props;

    return <circle cx={shape.x} cy={shape.y} r={shape.size / 2} fill={shape.color} />;
  }
}