import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ProjectCard from './ProjectCard';
import avatar from './images/avatar.png';
import './App.css';

const projects = [
	'LukasPietzschmann/Kyra',
	'LukasPietzschmann/PL0-Compiler',
	'LukasPietzschmann/awesome-beamer',
	'LukasPietzschmann/telescope-tabs'
];

function App() {
	const [repos, setRepos] = useState([]);
	const [error, set_error] = useState(false);

	const handleError = response => {
		if (!response.ok) {
			set_error(true);
			throw new Error(response.status);
		}
		return response;
	};

	const getRepoData = async url_tail => {
		const data = await fetch('https://api.github.com/repos/' + url_tail)
			.then(handleError)
			.then(response => response.json())
			.catch(error => console.log(error));
		return data;
	};

	useEffect(() => {
		let all_repos = [];
		projects.forEach(project => all_repos.push(getRepoData(project)));
		Promise.all(all_repos).then(repos => setRepos(repos));
	}, []);

	return (
		<>
			<header>
				<img
					style={{
						border: '1px solid var(--highlight)',
						borderRadius: '100%',
						boxShadow: '0 4px 8px var(--highlight)'
					}}
					src={avatar}
					width="120"
					height="auto"
				/>
			</header>
			<p>
				I'm a german developer based in Langenau and I'm currently studying Computer Science for my master's
				degree at the{' '}
				<a target="_blank" href="https://www.uni-ulm.de/en/">
					University of Ulm
				</a>
				.
			</p>
			<p>
				Generally, I enjoy coding in various languages, but C and C++ are probably the ones I am most
				experienced with. While I'm interested in various things, you can always get my attention by talking
				about compilers and hardware-near stuff. I'm currently also trying to get more into typesetting using
				(La)TeX and functional programming with Haskell.
			</p>
			<p>
				Click{' '}
				<Link reloadDocument to="/uni">
					here
				</Link>{' '}
				to view some stuff I made at University. This includes papers and code I wrote.
			</p>
			<p>Here are some other projects I enjoy(ed) working on:</p>
			<div className="cards">
				{error
					? projects.map((project, i) => {
							return (
								<ProjectCard
									key={i}
									url_tail={project}
									desc=""
									language="???"
									stars="???"
									license="???"
								/>
							);
					  })
					: Object.entries(repos).map(
							([key, {full_name, description, license, language, stargazers_count}]) => {
								return (
									<ProjectCard
										key={key}
										url_tail={full_name}
										desc={description}
										language={language}
										stars={stargazers_count}
										license={license?.spdx_id ?? 'Unlicensed'}
									/>
								);
							}
					  )}
			</div>
		</>
	);
}

export default App;
