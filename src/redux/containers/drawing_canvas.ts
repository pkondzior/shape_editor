import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DrawingCanvas as DrawingCanvasView, 
  DrawingCanvasState, DrawingCanvasDispatch} from "../../components/drawing_canvas/drawing_canvas.tsx";
import {State} from "../state.ts";
import * as models from "../../models.ts";
import {ClientOffset} from "react-dnd";
import {addShape} from "../actions/drawing_canvas.ts"

export const DrawingCanvas = connect(
  (state: State): DrawingCanvasState => {
    console.log(state.app.shapes);
    return {
      shapes: state.app.shapes
    };
  },
  (dispatch: Dispatch<State>): DrawingCanvasDispatch => {
    return {
      onDropShape: (offset: ClientOffset, shape: models.ShapeConstructor, color: string): void => {
        dispatch(addShape(offset, shape, color));
      },
    };
  }
)(DrawingCanvasView);