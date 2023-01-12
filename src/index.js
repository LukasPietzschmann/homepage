import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
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
	</React.StrictMode>
);
