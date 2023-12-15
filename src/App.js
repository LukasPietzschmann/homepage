import React, {useEffect} from 'react';
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
				Hey! You just stumbled over my little corner on the internet :)
			</p>
			<p>
				I'm Lukas, a german computer science student based near Ulm and I'm currently studying for my master's
				degree at the{' '}
				<a target="_blank" href="https://www.uni-ulm.de/en/" rel="noreferrer">
					University of Ulm
				</a>
				.
			</p>
			<p>
				I enjoy coding in all kinds of languages, but C and C++ (and <span class="tex">T<sub>e</sub>X</span> &#128521;) are probably the ones I am most
				experienced with. While many different things spark my interest, you can always get my attention by talking
				about compilers, functional programming, and typesetting.
			</p>
			<div className="wrapper">
				<div className="buttonWrapper" style={{border:'1px solid var(--highlight)'}}>
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
