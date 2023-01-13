import './Uni.css';

import RN from './data/rn.pdf';
import Exercise from './data/exercise.pdf';
import Lecture from './data/lecture.pdf';
import CheatSheet from './data/cheatsheet.pdf';

function Uni() {
	return (
		<>
			<header>Stuff I made at University</header>
			This is a little collection of things I wrote or made for various uni-courses. But unfortunately they are
			all in german.
			<table style={{marginTop: '2rem'}}>
				<tr>
					<th>Thing</th>
					<th>Description</th>
					<th>Link</th>
				</tr>
				<tr>
					<td>Term paper</td>
					<td>
						For the course "computer networks" I wrote a short paper about HTTP and how it works. This is
						only a 10 page summary of everything so don't expect anything to advanced.
					</td>
					<td>
						<a href={RN} target="_blank">
							Paper
						</a>
					</td>
				</tr>
				<tr>
					<td>Project paper</td>
					<td>
						The prject paper I wrote was all about the MOSTflexiPL compilation process. I developed a TUI
						that lets you view the compilers internal state during the whole process.
					</td>
					<td>
						<a href="https://github.com/LukasPietzschmann/Projektarbeit" target="_blank">
							Code and paper
						</a>
					</td>
				</tr>
				<tr>
					<td>Bachelor thesis</td>
					<td>
						My bachelor thesis also extended the MOSTflexiPL project. This time I implemented a
						compiler-backend that compiled MOSTflexiPl code into machine code using LLVM.
					</td>
					<td>
						<a href="https://github.com/LukasPietzschmann/Bachelorarbeit" target="_blank">
							Code and thesis
						</a>
					</td>
				</tr>
				<tr>
					<td>In-Memory Processing Lecture</td>
					<td>
						For the course "distributed computing platforms in practice" I held a lecture about in-memory
						processing and how Apache Spark implements this paradigm. I also provided a short exercise sheet
						that covers the most important concepts.
					</td>
					<td>
						<a href={Lecture} target="_blank">
							Lecture
						</a>,
						<br />
						<a href={Exercise} target="_blank">
							Exercise
						</a>,
						<br />
						<a href={CheatSheet} target="_blank">
							Cheat-Sheet
						</a>
					</td>
				</tr>
			</table>
		</>
	);
}

export default Uni;
