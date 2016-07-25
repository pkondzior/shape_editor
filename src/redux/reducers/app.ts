import {Action, Reducer} from "redux";
import {AppState} from "../state";

export function appReducer(): Reducer<AppState> {
  const initialState = {
    shapes: <any>[],
  };

  return (state: AppState = initialState, action: Action) => {
    return state;
  };
}
