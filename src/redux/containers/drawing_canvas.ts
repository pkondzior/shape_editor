import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DrawingCanvas as DrawingCanvasView, 
  DrawingCanvasState, DrawingCanvasDispatch} from "../../components/drawing_canvas/drawing_canvas.tsx";
import {State} from "../state.ts";
import * as models from "../../models.ts";
import {ClientOffset} from "react-dnd";
import {addShape, moveShape, selectShape, deselectShape, changeLevel} from "../actions/drawing_canvas.ts"

export const DrawingCanvas = connect(
  (state: State): DrawingCanvasState => {
    return {
      shapes: state.app.shapes,
      selectedShapeId: state.app.selectedShapeId,
    };
  },
  (dispatch: Dispatch<State>): DrawingCanvasDispatch => {
    return {
      onDropShape: (offset: ClientOffset, shape: models.ShapeConstructor, color: string): void => {
        dispatch(addShape(offset, shape, color));
      },
      onMove: (x: number, y: number): void => {
        dispatch(moveShape(x,y))
      },
      onSelect: (shapeId: string) => {
        dispatch(selectShape(shapeId));
      },
      onDeselect: () => {
        dispatch(deselectShape());
      },
      onChangeLevel: (direction: string) => {
        dispatch(changeLevel(direction));
      }
    };
  }
)(DrawingCanvasView);