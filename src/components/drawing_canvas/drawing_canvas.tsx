import * as React from "react";
import * as models from "../../models/shapes.ts";
import {Circle} from "../shapes/Circle.tsx";
import {Square} from "../shapes/Square.tsx";
import {Triangle} from "../shapes/Triangle.tsx";


export interface DrawingCanvasState {
    shapes: models.Shape[];
}

export interface DrawingCanvasDispatch {

}

export type DrawingCanvasProps = DrawingCanvasState & DrawingCanvasDispatch;

export class DrawingCanvas extends React.Component<DrawingCanvasProps, {}> {
    render() {
        return <div className="drawing-canvas">
            <svg ref="svg" preserveAspectRatio="none" width="100%" height="100%">
                {this.renderShapes(this.props.shapes) }
            </svg>
        </div>;
    }

    private renderShapes(shapes: models.Shape[]) {
        return shapes.map((shape) => {
            if (shape instanceof models.Circle) {
                return <Circle shape={shape} key={this.generateKey()} />;
            } else if (shape instanceof models.Square) {
                return <Square shape={shape} key={this.generateKey()} />;
            } else if (shape instanceof models.Triangle) {
                return <Triangle shape={shape} key={this.generateKey()} />;
            }
        })
    }

    private generateKey(): number {
        return Math.random();
    }
}