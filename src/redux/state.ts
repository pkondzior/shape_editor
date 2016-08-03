import * as models from "../models.ts";

export interface AppState {
  shapes: models.Shape[];
  selectedShapeId?: string;
}

export interface State {
  app: AppState;
  routing: any;
}
