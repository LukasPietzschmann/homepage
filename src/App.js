import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import avatar from './images/avatar.png';
import './App.css';

const projects = [
	'LukasPietzschmann/Kyra',
	'LukasPietzschmann/PL0-Compiler',
	'LukasPietzschmann/Bachelorarbeit',
	'LukasPietzschmann/sessions.nvim'
]

function App() {
	const [repos, setRepos] = useState([]);

	const getRepoData = async (url_tail) => {
		const data = await fetch('https://api.github.com/repos/' + url_tail)
			.then(res => res.json());
		return data;
	}

	useEffect(() => {
		let all_repos = [];
		projects.forEach(project => all_repos.push(getRepoData(project)));
		Promise.all(all_repos).then(repos => setRepos(repos));
	}, []);

	return (<>
		<header>
			<img style={{
				border: '1px solid rgba(0,0,0,0.2)',
				borderRadius: '100%',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
			}} src={avatar} width='120' height='auto'/>
		</header>
		<p>
			I'm a German developer based in Aalen and currently studying Computer Science for my master's degree at the <a target='_blank' href='https://www.uni-ulm.de/en/'>University of Ulm</a>.
		</p>
		<p>
			Generally, I enjoy coding in various languages. C++ and C being the ones I am most experienced with. Currently, I'm trying to get more into hardware-near programming and compilers.
		</p>
		<p>
			Here are some projects I enjoy(ed) working on:
		</p>
		<div className='cards'>
			{Object.entries(repos).map(([key, {full_name, description, license, language, stargazers_count}]) => {
				return <ProjectCard key={key} url_tail={full_name} desc={description} language={language} stars={stargazers_count} license={license?.spdx_id ?? 'Unlicensed'} />;
			})}
		</div>
		<div style={{margin: '50px 0px'}}/>
		<footer>
			<a href='mailto:lukas.pietzschmann@outlook.de' target='_blank'>Email</a>
			<div style={{margin: '0px 15px'}}>•</div>
			<a href='https://github.com/LukasPietzschmann' target='_blank'>GitHub</a>
			<div style={{margin: '0px 15px'}}>•</div>
			<a href='https://www.linkedin.com/in/lukas-p-83aa261a3' target='_blank'>LinkedIn</a>
		</footer>
	</>);
}

export default App;
