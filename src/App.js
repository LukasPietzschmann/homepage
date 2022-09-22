import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import avatar from './images/avatar.png';
import cat from './images/cat.png';
import cat_eye from './images/cat_eye.png';
import './App.css';

const projects = [
	'LukasPietzschmann/Kyra',
	'LukasPietzschmann/PL0-Compiler',
	'LukasPietzschmann/Bachelorarbeit',
	'LukasPietzschmann/sessions.nvim'
];

function App() {
	const [repos, setRepos] = useState([]);

	const handleError = response => {
		if (!response.ok) throw new Error(response.status);
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

	const angle = (cx, cy, ex, ey) => {
		const dy = ey - cy;
		const dx = ex - cx;
		const rad = Math.atan2(dy, dx);
		const deg = (rad * 180) / Math.PI;
		return deg;
	};

	useEffect(() => {
		const mouse_moved = ({clientX, clientY}) => {
			const cat = document.getElementById('cat');
			const rect = cat.getBoundingClientRect();
			const cat_x = rect.left + rect.width / 2;
			const cat_y = rect.top + rect.height / 2;
			const angle_degree = angle(clientX, clientY, cat_x, cat_y);
			const eyes = document.querySelectorAll('#eye');
			eyes.forEach(eye => (eye.style.transform = `rotate(${90 + angle_degree}deg)`));
		};

		window.addEventListener('mousemove', mouse_moved);
		return () => {
			window.removeEventListener('mousemove', mouse_moved);
		};
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
				I'm a german developer based in Aalen and currently studying Computer Science for my master's degree at
				the{' '}
				<a target="_blank" href="https://www.uni-ulm.de/en/">
					University of Ulm
				</a>
				.
			</p>
			<p>
				Generally, I enjoy coding in various languages. C++ and C being the ones I am most experienced with.
				Currently, I'm trying to get more into hardware-near programming and compilers.
			</p>
			<p>Here are some projects I enjoy(ed) working on:</p>
			<div className="cards">
				{Object.entries(repos).map(([key, {full_name, description, license, language, stargazers_count}]) => {
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
				})}
			</div>
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
			<div>
				<img
					style={{
						position: 'fixed',
						bottom: -20,
						left: 20
					}}
					id="cat"
					src={cat}
					width="100"
					height="auto"
				/>
				<div>
					<img
						style={{
							position: 'fixed',
							bottom: 45,
							left: 76
						}}
						src={cat_eye}
						id="eye"
						width="18"
						height="auto"
					/>
					<img
						style={{
							position: 'fixed',
							bottom: 44,
							left: 41
						}}
						src={cat_eye}
						id="eye"
						width="18"
						height="auto"
					/>
				</div>
			</div>
		</>
	);
}

export default App;
