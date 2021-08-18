import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Demo from '../routes/demo';
import BestPractice from '../routes/best-practice';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Demo path="/demo" />
			<BestPractice path="/best-practice" />
		</Router>
	</div>
)

export default App;
