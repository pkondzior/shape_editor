import * as React from "react";
import * as models from "../../models/shapes.ts";
import {Circle} from "../shapes/Circle.tsx";
import {Square} from "../shapes/Square.tsx";
import {Triangle} from "../shapes/Triangle.tsx";

export interface PaletteItemProps {
  shapeModel: any;
}

export class PaletteItem extends React.Component<PaletteItemProps, {}> {
  render() {
    return <div className="palette-item">
      <svg width={50} height={50}>
        {this.renderShape(this.props.shapeModel) }
      </svg>
    </div>;
  }

  private renderShape(shapeModel: any) {
    const shapeInstance = new shapeModel(25, 25, 50);
    if (shapeInstance instanceof models.Circle) {
      return <Circle shape={shapeInstance} />;
    } else if (shapeInstance instanceof models.Square) {
      return <Square shape={shapeInstance} />;
    } else if (shapeInstance instanceof models.Triangle) {
      return <Triangle shape={shapeInstance} />;
    }
  }
}