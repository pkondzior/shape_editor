import * as React from "react";
import {ClientOffset} from "react-dnd";
import * as models from "../../models/shapes.ts";
import {Circle} from "../shapes/Circle.tsx";
import {Square} from "../shapes/Square.tsx";
import {Triangle} from "../shapes/Triangle.tsx";
import {Droppable} from "../droppable/droppable.tsx"
import {DraggableProps} from "../palette_item/dragabble_palette_item.tsx"


export interface DrawingCanvasState {
    shapes: models.Shape[];
}

export interface DrawingCanvasDispatch {
    onDropShape: (offset: ClientOffset, shape: models.ShapeConstructor, color: string) => void;
}

export type DrawingCanvasProps = DrawingCanvasState & DrawingCanvasDispatch;

export class DrawingCanvas extends React.Component<DrawingCanvasProps, {}> {
    render() {
        const onDrop = (payload: DraggableProps, offset: ClientOffset, didDrop: boolean) => {
            if (!didDrop) {
                this.props.onDropShape(offset, payload.shapeModel, payload.shapeColor);
            }
        };
        return <Droppable onDrop={onDrop} key="dropable-area">
            <div className="drawing-canvas">
                <svg ref="svg" preserveAspectRatio="none" width="100%" height="100%">
                    {this.renderShapes(this.props.shapes) }
                </svg>
            </div>
        </Droppable>;
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