import * as React from "react";
import * as models from "../../models/shapes/triangle.ts";

export interface TriangleProps {
  shape: any;
}

export class Triangle extends React.Component<TriangleProps, {}> {
  render() {
    let {shape} = this.props;

    const pointA = [shape.x - shape.size / 2, shape.y + shape.size / 2].join(" ");
    const pointB = [shape.x + shape.size / 2, shape.y + shape.size / 2].join(" ");
    const pointC = [shape.x, shape.y - shape.size / 2].join(" "); 
    const points = [pointA, pointB, pointC].join(",");

    return <polygon points={points} fill={shape.color} />;
  }
}