import { StrictMode } from 'react';
import { Game } from './components/Game/Game';
import './index.css';

export function App() {
	return (
		<StrictMode>
			<div className="app">
				<Game />
			</div>
		</StrictMode>
	);
}
