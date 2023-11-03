import './Uni.css';

import RN from './data/rn.pdf';
import Exercise from './data/exercise.pdf';
import Lecture from './data/lecture.pdf';
import Report from './data/report.pdf';
import BA from './data/ba.pdf';
import PA from './data/pa.pdf';
import SIMD from './data/SIMD.pdf'
import Poster from './data/poster.pdf'

function Uni() {
	const data = [
		{
			thing: 'Project Poster',
			desc: 'I prepared a poster for a project I did. The project is about creating a data flow graph for java and the poster shows a small portion of the work I did.',
			links: [{name: 'Poster', link: Poster}]
		},
		{
			thing: 'C++ SIMD Intrinsics',
			desc: 'I prepared a small talk about SIMD intrinsics in C++ for a small grade bonus.',
			links: [{name: 'Slides', link: SIMD}]
		},
		{
			thing: 'Spark Paper',
			desc: 'After the course "distributed computing platforms in practice" I wrote a small report summarizing the most important concepts of Apache Spark.',
			links: [{name: 'Report', link: Report}]
		},
		{
			thing: 'Spark Lecture',
			desc: 'For the course "distributed computing platforms in practice" I held a lecture about Apache Spark and in memory processing.\
					I also provided a short exercise sheet.',
			links: [
				{name: 'Slides', link: Lecture},
				{name: 'Exercise', link: Exercise}
			]
		},
		{
			thing: 'Bachelor thesis',
			desc: 'My bachelor thesis extended the MOSTflexiPL project. This time I implemented a compiler-backend that compiled MOSTflexiPl code into machine code using LLVM.',
			links: [
				{name: 'Thesis', link: BA},
				{name: 'Code', link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'}
			]
		},
		{
			thing: 'Project paper',
			desc: 'The project paper I wrote was all about the MOSTflexiPL compilation process. I developed a TUI that lets you view the compilers internal state during the whole process.',
			links: [
				{name: 'Paper', link: PA},
				{name: 'Code', link: 'https://github.com/LukasPietzschmann/Projektarbeit'}
			]
		},
		{
			thing: 'Term paper',
			desc: 'For the course "computer networks" I wrote a short paper about HTTP and how it works. This is only a 10 page summary of everything so don\'t expect anything to advanced.',
			links: [{name: 'Paper', link: RN}]
		}
	];
	return (
		<>
			<div>
				This is a little collection of things I wrote or made for various uni-courses, sorted by date
				(descending).
			</div>
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
											<a key={j} href={link} target="_blank" rel="noreferrer">
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
