import * as React from "react";
import {ClientOffset} from "react-dnd";
import * as models from "../../models/shapes.ts";
import * as _ from "lodash";
import {CanvasItem} from "../canvas_item/canvas_item.tsx";
import {Droppable} from "../droppable/droppable.tsx"
import {DraggableProps} from "../palette_item/dragabble_palette_item.tsx"
import {getRelativeEventCordinates} from "../../utils/get_relative_event_cordinates.ts"


export interface DrawingCanvasState {
    shapes: models.Shape[];
    selectedShapeId: string;
}

export interface DrawingCanvasDispatch {
    onDropShape: (offset: ClientOffset, shape: models.ShapeConstructor, color: string) => void;
    onMove: (x: number, y: number) => void;
    onSelect: (shapeId: string) => void;
    onDeselect: () => void;
    onChangeLevel: (direction: string) => void;
}

export type DrawingCanvasProps = DrawingCanvasState & DrawingCanvasDispatch;

export class DrawingCanvas extends React.Component<DrawingCanvasProps, {}> {

    private changeLevel: (direction: string) => void;

    componentWillMount() {
        window.addEventListener("wheel", (e) => this.onWheel(e), false)
    }

    render() {
        const onDrop = (payload: DraggableProps, offset: ClientOffset, didDrop: boolean) => {
            if (!didDrop) {
                this.props.onDropShape(offset, payload.shapeModel, payload.shapeColor);
            }
        };
        return <Droppable onDrop={onDrop} key="dropable-area">
            <div className="drawing-canvas" onMouseMove={(e) => this.mouseMove(e) }>
                <svg ref="svg" preserveAspectRatio="none" width="100%" height="100%">
                    {this.renderShapes(this.props.shapes) }
                </svg>
            </div>
        </Droppable>;
    }

    private renderShapes(shapes: models.Shape[]) {
        return shapes.map((shape: models.Shape) => {
            return <CanvasItem shape={shape} key={shape.id} onSelect={this.props.onSelect} onDeselect={this.props.onDeselect} />;
        })
    }

    private mouseMove(event: React.MouseEvent): void {
        if (this.props.selectedShapeId) {
            const {x, y} = getRelativeEventCordinates((this.refs["svg"] as Element), event);
            this.props.onMove(x, y);
        }
    }

    private onWheel(event: any): void {
        if (this.props.selectedShapeId) {
            event.preventDefault();
            event.stopPropagation();
            const direction = this.wheelDirection(event.deltaY);
            if (direction) {
                this.props.onChangeLevel(direction);
            }
            
        }
    }

    private wheelDirection(n: number): string {
        if (n >= 1) {
            return "down";
        } else if (n <= -1) {
            return "up";
        }
    }
}