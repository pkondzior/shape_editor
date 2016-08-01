import * as React from "react";
import {createStore, applyMiddleware, compose, Store, StoreEnhancer} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory, Router, Route} from "react-router";
import {syncHistoryWithStore, ReactRouterReduxHistory} from "react-router-redux";
import {Editor} from "./editor/editor.tsx"
import {State} from "../redux/state.ts";
import {appReducer} from "../redux/reducers/app.ts";
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";


export default function app(): React.ReactElement<any> {
  const store = createStore<State>(
    combineReducers<State>({
      app: appReducer,
      routing: routerReducer
    }),
    compose(
      applyMiddleware(thunkMiddleware),
      (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    ) as StoreEnhancer<State>
  );

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="*" component={Editor}/>
      </Router>
    </Provider>
  );
}