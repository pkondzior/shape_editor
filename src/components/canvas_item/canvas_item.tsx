import * as React from "react";
import * as models from "../../models/shapes.ts"
import {Circle} from "../shapes/Circle.tsx";
import {Square} from "../shapes/Square.tsx";
import {Triangle} from "../shapes/Triangle.tsx";

export interface CanvasItemProps {
  shape: models.Shape;
  onSelect?: (shapeId: string) => void;
  onDeselect?: () => void;
}


export class CanvasItem extends React.Component<CanvasItemProps, {}> {
  render() {
    return <g onMouseDown={(e) => this.props.onSelect(this.props.shape.id) }
      onMouseUp={(e) => this.props.onDeselect()}>
      {this.renderShape(this.props.shape) }
    </g>
  }

  private renderShape(shape: models.Shape) {
    if (shape instanceof models.Circle) {
      return <Circle shape={shape} />;
    } else if (shape instanceof models.Square) {
      return <Square shape={shape} />;
    } else if (shape instanceof models.Triangle) {
      return <Triangle shape={shape} />;
    }
  }
}