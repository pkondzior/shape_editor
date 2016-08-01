import * as models from "../../models.ts";
import {Action, Reducer} from "redux";
import {AppState} from "../state";
import {randomColor} from "../../utils/random_color.ts";
import {drawingCanvasActions} from "../actions/drawing_canvas.ts";
import {drawingCanvasReducer} from "../reducers/drawing_canvas.ts"

const initialState: AppState = {
  shapes: [
    new models.Circle(100, 100, 50, randomColor()),
    new models.Square(200, 200, 50, randomColor()),
    new models.Triangle(300, 300, 50, randomColor()),
  ]
};

export function appReducer(state: AppState = initialState, action: Action): AppState {
  if (drawingCanvasActions.indexOf(action.type) >= 0) {
    return drawingCanvasReducer(state, action);
  } else {
    return state;
  }
}
