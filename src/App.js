import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import avatar from './images/avatar.png';
import './App.css';
import './tabs.css';
import Uni from './Uni';
import PersonalProjects from './PersonalProjects';

function App() {
	useEffect(() => {
		const tabs = document.querySelector('.wrapper');
		const tabButton = document.querySelectorAll('.tab-button');
		const contents = document.querySelectorAll('.content');

		tabs.onclick = e => {
			const id = e.target.dataset.id;
			if (id) {
				tabButton.forEach(btn => {
					btn.classList.remove('active');
				});
				e.target.classList.add('active');

				contents.forEach(content => {
					content.classList.remove('active');
				});

				const element = document.getElementById(id);
				element.classList.add('active');
			}
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
					height="120"
					alt="Avatar"
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
				about compilers and hardware-near stuff. I'm currently also getting more into typesetting using (La)TeX
				and functional programming.
			</p>
			<div className="wrapper">
				<div className="buttonWrapper">
					<button
						className="tab-button active"
						style={{borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'}}
						data-id="home">
						Personal Projects
					</button>
					<button
						className="tab-button"
						style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}}
						data-id="contact">
						University Stuff
					</button>
				</div>
				<div className="contentWrapper">
					<div className="content active" id="home">
						<PersonalProjects />
					</div>
					<div className="content" id="contact">
						<Uni />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
