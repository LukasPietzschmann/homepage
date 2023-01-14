import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import ProjectCard from './ProjectCard';
import avatar from './images/avatar.png';
import cat from './images/cat.png';
import cat_sad from './images/cat_sad.png';
import cat_eye from './images/cat_eye.png';
import './App.css';

const projects = [
	'LukasPietzschmann/Kyra',
	'LukasPietzschmann/PL0-Compiler',
	'LukasPietzschmann/awesome-beamer',
	'LukasPietzschmann/telescope-tabs'
	// 'LukasPietzschmann/Bachelorarbeit',
	// 'LukasPietzschmann/Projektarbeit'
];

function App() {
	const [repos, setRepos] = useState([]);
	const [cat_clicked, set_cat_clicked] = useState(0);
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

	const miau = () => {
		set_cat_clicked(cat_clicked + 1);
		alert(cat_clicked ? 'Stop it' + '!'.repeat(cat_clicked) : 'Miau! That hurt :(');
	};

	const angle = (cx, cy, ex, ey) => {
		const dy = ey - cy;
		const dx = ex - cx;
		const rad = Math.atan2(dy, dx);
		const deg = (rad * 180) / Math.PI;
		return deg;
	};

	useEffect(() => {
		if (isMobile) return;

		const mouse_moved = ({clientX, clientY}) => {
			if (cat_clicked > 0) return;

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
	}, [cat_clicked]);

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
			<p align="justify">
				Generally, I enjoy coding in various languages, but C and C++ are probably the ones I am most
				experienced with. While I'm interested in various things, you can always get my attention by talking
				about compilers and hardware-near stuff. I'm currently also trying to get more into typesetting using
				(La)TeX.
			</p>
			<p>
				Here are some projects I enjoy(ed) working on
				{error ? (
					<div
						style={{display: 'inline', cursor: 'help'}}
						onClick={() =>
							alert(
								'Limited information is provided, as there was an error talking to the friendly GitHub servers :('
							)
						}>
						(?)
					</div>
				) : (
					''
				)}
				:
			</p>
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
			<div style={{margin: '50px 0px'}} />
			<footer>
				<Link reloadDocument to="/uni">Stuff I made at University</Link>
			</footer>
			{isMobile ? (
				''
			) : (
				<div>
					<img
						style={{
							position: 'fixed',
							bottom: -20,
							left: 20
						}}
						id="cat"
						src={cat_clicked > 0 ? cat_sad : cat}
						width="100"
						height="auto"
						onClick={miau}
					/>
					<div>
						<img
							style={{
								display: cat_clicked > 0 ? 'none' : 'block',
								position: 'fixed',
								bottom: 45,
								left: 76
							}}
							src={cat_eye}
							id="eye"
							width="18"
							height="auto"
							onClick={miau}
						/>
						<img
							style={{
								display: cat_clicked > 0 ? 'none' : 'block',
								position: 'fixed',
								bottom: 44,
								left: 41
							}}
							src={cat_eye}
							id="eye"
							width="18"
							height="auto"
							onClick={miau}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
