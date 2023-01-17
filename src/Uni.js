import './Uni.css';

import RN from './data/rn.pdf';
import Exercise from './data/exercise.pdf';
import Lecture from './data/lecture.pdf';
import CheatSheet from './data/cheatsheet.pdf';

function Uni() {
	const data = [
		{
			thing: 'Term paper',
			desc: 'For the course "computer networks" I wrote a short paper about HTTP and how it works. This is only a 10 page summary of everything so don\'t expect anything to advanced.',
			links: [{name: 'Paper', link: RN}]
		},
		{
			thing: 'Project paper',
			desc: 'The project paper I wrote was all about the MOSTflexiPL compilation process. I developed a TUI that lets you view the compilers internal state during the whole process.',
			links: [{name: 'Code and paper', link: 'https://github.com/LukasPietzschmann/Projektarbeit'}]
		},
		{
			thing: 'Bachelor thesis',
			desc: 'My bachelor thesis also extended the MOSTflexiPL project. This time I implemented a compiler-backend that compiled MOSTflexiPl code into machine code using LLVM.',
			links: [{name: 'Code and thesis', link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'}]
		},
		{
			thing: 'In-Memory Processing Lecture',
			desc: 'For the course "distributed computing platforms in practice" I held a lecture about in-memory processing and how Apache Spark implements this paradigm.\
					I also provided a short exercise sheet that covers the most important concepts.',
			links: [
				{name: 'Lecture', link: Lecture},
				{name: 'Exercise', link: Exercise},
				{name: 'Cheat-Sheet', link: CheatSheet}
			]
		}
	];
	return (
		<>
			<header>Stuff I made at University</header>
			<p>
				This is a little collection of things I wrote or made for various uni-courses. But unfortunately they are
				all in german.
			</p>
			<table style={{marginTop: '2rem'}}>
				<thead>
					<tr>
						<th>Thing</th>
						<th>Description</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({thing, desc, links}, i) => {
						return (
							<tr key={i}>
								<td data-label="Thing">{thing}</td>
								<td data-label="Description">{desc}</td>
								<td data-label="Link">
									{links
										.map(({name, link}, j) => (
											<a key={j} href={link} target="_blank">
												{name}
											</a>
										))
										.reduce((acc, elem) => (acc === null ? [elem] : [acc, ', ', elem]), null)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Uni;
