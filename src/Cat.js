import React, {useState, useEffect} from 'react';
import cat from './images/cat.png';
import cat_sad from './images/cat_sad.png';
import cat_eye from './images/cat_eye.png';

function Cat() {
	const [cat_clicked, set_cat_clicked] = useState(0);

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
	);
}

export default Cat;
