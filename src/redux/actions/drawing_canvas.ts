import {Action} from "redux";
import {ShapeConstructor} from "../../models.ts";
import {ClientOffset} from "react-dnd";

export const ADD_SHAPE = "drawing_canvas.add_shape";

export const drawingCanvasActions = [ADD_SHAPE];

export interface DrawingCanvasAction extends Action {}

export interface AddShapeAction extends DrawingCanvasAction {
  offset: ClientOffset;
  shape: ShapeConstructor;
  color: string;
}

export function addShape(offset: ClientOffset, shape: ShapeConstructor, color: string): AddShapeAction {
  return {
    offset: offset,
    shape: shape,
    color: color,
    type: ADD_SHAPE,
  };
}
