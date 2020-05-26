import {compose, createStore} from 'redux';
import reducer from "./reducer";

export type AppState = ReturnType<typeof reducer>

export const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

