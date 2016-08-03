import * as actions from "../actions/drawing_canvas.ts";
import {Action} from "redux";
import {AppState} from "../state.ts";
import {AddShapeAction, MoveShapeAction, SelectShapeAction, DeselectShapeAction, ChangeLevelShapeAction} from "../actions/drawing_canvas.ts";
import {Shape} from "../../models.ts";

export function drawingCanvasReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case actions.ADD_SHAPE:
      return addShape(state, action as AddShapeAction);
    case actions.MOVE_SHAPE:
      return moveShape(state, action as MoveShapeAction);
    case actions.SELECT_SHAPE:
      return selectShape(state, action as SelectShapeAction);
    case actions.DESELECT_SHAPE:
      return deselectShape(state, action as DeselectShapeAction);
    case actions.CHANGE_LEVEL_SHAPE:
      return changeLevelShape(state, action as ChangeLevelShapeAction);
    default:
      return state;
  }
}

function addShape(state: AppState, action: AddShapeAction): AppState {
  const {offset, shape, color} = action;
  return Object.assign({}, state, { shapes: [...state.shapes, new shape(offset.x - 50, offset.y, 50, color)] });
}

function moveShape(state: AppState, action: MoveShapeAction): AppState {
  if (state.selectedShapeId) {
    const {x, y} = action;
    const newShapes = state.shapes.map((shape: Shape) => {
      if (shape.id == state.selectedShapeId) {
        shape.x = x;
        shape.y = y
      }
      return shape;
    });
    return Object.assign({}, state, { shapes: [...newShapes] });
  } else {
    return state;
  }
}

function selectShape(state: AppState, action: SelectShapeAction): AppState {
  const {shapeId} = action;
  return Object.assign({}, state, { selectedShapeId: shapeId });
}


function deselectShape(state: AppState, action: DeselectShapeAction): AppState {
  return Object.assign({}, state, { selectedShapeId: null });
}

function changeLevelShape(state: AppState, action: ChangeLevelShapeAction): AppState {
  const {direction} = action;
  const elementIndex = state.shapes.findIndex((shape) => {
    return shape.id == state.selectedShapeId
  })
  const newShapes = state.shapes.slice();
  if (direction == "up" && elementIndex != state.shapes.length-1) {
    newShapes.splice(elementIndex, 2, newShapes[elementIndex + 1], newShapes[elementIndex])
    return Object.assign({}, state, { shapes: [...newShapes] });
  } else if (direction == "down" && elementIndex != 0) {
    newShapes.splice(elementIndex-1, 2,  newShapes[elementIndex], newShapes[elementIndex-1])
    return Object.assign({}, state, { shapes: [...newShapes] });
  } else {
    return state;
  }
}