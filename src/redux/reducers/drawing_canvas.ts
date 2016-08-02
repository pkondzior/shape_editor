import * as actions from "../actions/drawing_canvas.ts";
import {Action} from "redux";
import {AppState} from "../state.ts";
import {AddShapeAction} from "../actions/drawing_canvas.ts";
import {Shape} from "../../models.ts";

export function drawingCanvasReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case actions.ADD_SHAPE:
      return addShape(state, action as AddShapeAction);
    default:
      return state;
  }
}

function addShape(state: AppState, action: AddShapeAction): AppState {
  const {offset, shape, color} = action;
  return Object.assign({}, state, { shapes: [...state.shapes,  new shape(offset.x - 50, offset.y, 50, color)]});
}