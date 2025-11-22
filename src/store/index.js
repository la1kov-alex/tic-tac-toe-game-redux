import { createStore } from 'redux';
import { gameReducer } from './gameSlice';

export const store = createStore(gameReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

let subscribers = [];

export const subscribe = (callback) => {
	subscribers.push(callback);

	return () => {
		subscribers = subscribers.filter((sub) => sub !== callback);
	};
};

export const notifySubscribers = () => {
	subscribers.forEach((callback) => callback());
};

const originalDispatch = store.dispatch;
store.dispatch = (action) => {
	const result = originalDispatch(action);
	notifySubscribers();
	return result;
};

export const getState = () => store.getState();
