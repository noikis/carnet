import { ActionType } from "./action-types/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
import { saveCellsMiddleware } from "./middlewares/saveCellsMiddleware";

const middlewares = [thunk, saveCellsMiddleware];

export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});

const state = store.getState();

store.dispatch({
  type: ActionType.UPDATE_CELL,
  payload: {
    id: state.cells?.order[0] as string,
    content: `
import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1 className="has-text-primary is-size-1">Hello Universe</h1>;
};

show(<App/>)
`,
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: "text",
  },
});
