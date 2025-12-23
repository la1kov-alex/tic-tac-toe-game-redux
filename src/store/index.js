import { createStore } from 'redux';
import { gameReducer } from './reducers';

const store = createStore(gameReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

const originalDispatch = store.dispatch;
let renderCallback = null;

store.dispatch = (action) => {
	const result = originalDispatch(action);
	if (renderCallback) {
		renderCallback();
	}
	return result;
};

export const setRenderCallback = (callback) => {
	renderCallback = callback;
};

export default store;
