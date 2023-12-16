import './Uni.css';

const computerNetworks = `${process.env.PUBLIC_URL}/PDFs/computer_networks.pdf`
const sparkExercise = `${process.env.PUBLIC_URL}/PDFs/spark_exercise.pdf`;
const sparkLecture = `${process.env.PUBLIC_URL}/PDFs/spark_lecture.pdf`;
const sparkReport = `${process.env.PUBLIC_URL}/PDFs/spark_report.pdf`;
const bachelor = `${process.env.PUBLIC_URL}/PDFs/bachelor.pdf`
const termPaper = `${process.env.PUBLIC_URL}/PDFs/term_paper.pdf`
const simdPresentation = `${process.env.PUBLIC_URL}/PDFs/simd_presentation.pdf`
const dfgPoster = `${process.env.PUBLIC_URL}/PDFs/dfg_poster.pdf`
const dfgPresentation = `${process.env.PUBLIC_URL}/PDFs/dfg_presentation.pdf`

function Uni() {
	const data = [
		{
			thing: 'Java dataflow graph',
			desc: 'I built a module for an existing research project, that can generate dataflow graphs for java. To explain the stuff, I prepared some slides and a poster.',
			links: [{name: 'Slides', link: dfgPresentation}, {name: 'Poster', link: dfgPoster}]
		},
		{
			thing: 'C++ SIMD Intrinsics',
			desc: 'I prepared a small talk about SIMD intrinsics in C++ for a small grade bonus.',
			links: [{name: 'Slides', link: simdPresentation}]
		},
		{
			thing: 'Spark Paper',
			desc: 'After the course "distributed computing platforms in practice" I wrote a small report summarizing the most important concepts of Apache Spark.',
			links: [{name: 'Report', link: sparkReport}]
		},
		{
			thing: 'Spark Lecture',
			desc: 'For the course "distributed computing platforms in practice" I held a lecture about Apache Spark and in memory processing. I also provided a short exercise sheet.',
			links: [
				{name: 'Slides', link: sparkLecture},
				{name: 'Exercise', link: sparkExercise}
			]
		},
		{
			thing: 'Bachelor thesis',
			desc: 'My bachelor thesis extended the MOSTflexiPL project. This time I implemented a compiler-backend that compiled MOSTflexiPl code into machine code using LLVM.',
			links: [
				{name: 'Thesis', link: bachelor},
				{name: 'Code', link: 'https://github.com/LukasPietzschmann/Bachelorarbeit'}
			]
		},
		{
			thing: 'Project paper',
			desc: 'The project paper I wrote was all about the MOSTflexiPL compilation process. I developed a TUI that lets you view the compilers internal state during the whole process.',
			links: [
				{name: 'Paper', link: termPaper},
				{name: 'Code', link: 'https://github.com/LukasPietzschmann/Projektarbeit'}
			]
		},
		{
			thing: 'Term paper',
			desc: 'For the course "computer networks" I wrote a short paper about HTTP and how it works. This is only a 10 page summary of everything so don\'t expect anything to advanced.',
			links: [{name: 'Paper', link: computerNetworks}]
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
