import { StrictMode } from 'react';
import Game from './components/Game/Game';
import './index.css';

function App() {
	return (
		<StrictMode>
			<div className="app">
				<Game />
			</div>
		</StrictMode>
	);
}

export default App;
