import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DrawingCanvas as DrawingCanvasView, 
  DrawingCanvasState, DrawingCanvasDispatch} from "../../components/drawing_canvas/drawing_canvas.tsx";
import {State} from "../state.ts";
import * as models from "../../models.ts";

export const DrawingCanvas = connect(
  (state: State): DrawingCanvasState => {
    console.log(state.app.shapes);
    return {
      shapes: state.app.shapes
    };
  },
  (dispatch: Dispatch<State>): DrawingCanvasDispatch => {
    return {
    };
  }
)(DrawingCanvasView);