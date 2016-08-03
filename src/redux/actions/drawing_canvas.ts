import {Action} from "redux";
import * as models from "../../models.ts";
import {ClientOffset} from "react-dnd";

export const ADD_SHAPE = "drawing_canvas.add_shape";
export const MOVE_SHAPE = "drawing_canvas.move_shape";
export const SELECT_SHAPE = "drawing_canvas.select_shape";
export const DESELECT_SHAPE = "drawing_canvas.deselect_shape";
export const CHANGE_LEVEL_SHAPE = "drawing_canvas.change_level";

export const drawingCanvasActions = [ADD_SHAPE, MOVE_SHAPE, SELECT_SHAPE, DESELECT_SHAPE, CHANGE_LEVEL_SHAPE];

export interface DrawingCanvasAction extends Action { }
export interface SelectShapeAction extends DrawingCanvasAction {
  shapeId: string;
}

export interface DeselectShapeAction extends DrawingCanvasAction { }

export interface AddShapeAction extends DrawingCanvasAction {
  offset: ClientOffset;
  shape: models.ShapeConstructor;
  color: string;
}

export interface MoveShapeAction extends DrawingCanvasAction {
  x: number;
  y: number;
}


export interface ChangeLevelShapeAction extends DrawingCanvasAction {
  direction: string;
}

export function addShape(offset: ClientOffset, shape: models.ShapeConstructor, color: string): AddShapeAction {
  return {
    offset: offset,
    shape: shape,
    color: color,
    type: ADD_SHAPE,
  };
}

export function moveShape(x: number, y: number): MoveShapeAction {
  return {
    x: x,
    y: y,
    type: MOVE_SHAPE
  };
}

export function selectShape(shapeId: string): SelectShapeAction {
  return {
    shapeId: shapeId,
    type: SELECT_SHAPE
  };
}

export function deselectShape(): DeselectShapeAction {
  return {
    type: DESELECT_SHAPE
  };
}


export function changeLevel(direction: string): ChangeLevelShapeAction {
  return {
    direction: direction,
    type: CHANGE_LEVEL_SHAPE
  };
}