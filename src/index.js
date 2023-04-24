import '@fontsource/source-code-pro';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import './index.css';
import App from './App';
import Uni from './Uni';
import NotFound from './NotFound';
import Cat from './Cat';
import Imprint from './Imprint';
import Privacy from './Privacy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router basemname={`/${process.env.PUBLIC_URL || 'localhost'}`}>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/uni" element={<Uni />} />
				<Route exact path="/imprint" element={<Imprint />} />
				<Route exact path="/privacy" element={<Privacy />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
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
				<div style={{margin: '0px 15px'}}>•</div>
				<Link reloadDocument to="/imprint">
					Imprint
				</Link>
				<div style={{margin: '0px 15px'}}>•</div>
				<Link reloadDocument to="/privacy">
					Privacy Policy
				</Link>
			</footer>
			{isMobile ? '' : <Cat />}
		</Router>
	</React.StrictMode>
);
