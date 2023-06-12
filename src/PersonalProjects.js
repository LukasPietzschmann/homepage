import {useEffect, useState} from 'react';
import ProjectCard from './ProjectCard';
import Hover from './Hover';

const projects = [
	'LukasPietzschmann/Kyra',
	'LukasPietzschmann/PL0-Compiler',
	'LukasPietzschmann/awesome-beamer',
	'LukasPietzschmann/telescope-tabs'
];

function PersonalProjects() {
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
			<div>Here are some personal projects I enjoy(ed) working on:</div>
			<p className="cards">
				{error
					? projects.map((project, i) => {
							return (
								<Hover>
									<ProjectCard
										key={i}
										url_tail={project}
										desc=""
										language="???"
										stars="???"
										forks="???"
									/>
								</Hover>
							);
					  })
					: Object.entries(repos).map(
							([key, {full_name, description, language, stargazers_count, forks}]) => {
								return (
									<Hover>
										<ProjectCard
											key={key}
											url_tail={full_name}
											desc={description}
											language={language}
											stars={stargazers_count}
											forks={forks}
										/>
									</Hover>
								);
							}
					  )}
			</p>
		</>
	);
}

export default PersonalProjects;
