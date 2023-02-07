import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import './index.css';
import App from './App';
import Uni from './Uni';
import NotFound from './NotFound';
import Cat from './Cat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router basemname={`/${process.env.PUBLIC_URL || 'localhost'}`}>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/uni" element={<Uni />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
		<div style={{margin: '50px 0px'}} />
		<footer>
			<a href="mailto:lukas.pietzschmann@outlook.de" target="_blank">
				Email
			</a>
			<div style={{margin: '0px 15px'}}>•</div>
			<a href="https://github.com/LukasPietzschmann" target="_blank">
				GitHub
			</a>
			<div style={{margin: '0px 15px'}}>•</div>
			<a href="https://www.linkedin.com/in/lukas-p-83aa261a3" target="_blank">
				LinkedIn
			</a>
		</footer>
		{isMobile ? '' : <Cat />}
	</React.StrictMode>
);
