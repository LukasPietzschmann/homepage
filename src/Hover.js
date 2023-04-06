import React, {useRef, useState} from 'react';

function Hover({children}) {
	const [tilt_styles, set_tilt_styles] = useState({
		transformStyle: 'preserve-3d',
		display: 'inline-block'
	});

	const element = useRef();
	const width = useRef(0);
	const height = useRef(0);
	const top = useRef(0);
	const left = useRef(0);
	const update_call = useRef(null);
	const transition_timeout = useRef(null);

	const easing = 'cubic-bezier(.03,.98,.52,.99)';
	const scale = 1.03;
	const speed = 300;
	const perspective = 1000;
	const max = 15;

	function handle_on_mouse_enter() {
		update_element_position();
		set_transition();
	}

	function handle_on_mouse_move(event) {
		if (update_call.current !== null && typeof window !== 'undefined')
			window.cancelAnimationFrame(update_call.current);
		update_call.current = requestAnimationFrame(() => update_element_style(event));
	}

	function handle_on_mouse_leave() {
		set_transition();
		handle_reset();
	}

	function update_element_style(event) {
		const values = get_values(event);
		set_tilt_styles(prev_style => ({
			...prev_style,
			transform: `perspective(${perspective}px) rotateX(
			${values.tilt_y}deg) rotateY(${values.tilt_x}deg) scale3d(${scale}, ${scale}, ${scale})`
		}));
	}

	function get_values(event) {
		let x = (event.clientX - left.current) / width.current;
		let y = (event.clientY - top.current) / height.current;

		x = Math.min(Math.max(x, 0), 1);
		y = Math.min(Math.max(y, 0), 1);

		const tilt_x = -1 * (max / 2 - x * max).toFixed(2);
		const tilt_y = -1 * (max / 2 - y * max).toFixed(2);

		const angle =
			Math.atan2(
				event.clientX - (left.current + width.current / 2),
				-(event.clientY - (top.current + height.current / 2))
			) *
			(180 / Math.PI);

		const percentage_x = x * 100;
		const percentage_y = y * 100;

		return {
			tilt_x,
			tilt_y,
			angle,
			percentage_x,
			percentage_y
		};
	}

	function update_element_position() {
		const rect = element.current.getBoundingClientRect();
		width.current = rect.width;
		height.current = rect.height;
		top.current = rect.top;
		left.current = rect.left;
	}

	function set_transition() {
		clearTimeout(transition_timeout.current);

		set_tilt_styles(prev_style => ({
			...prev_style,
			transition: `${speed}ms ${easing}`
		}));

		transition_timeout.current = setTimeout(() => {
			set_tilt_styles(prev_style => ({
				...prev_style,
				transition: ''
			}));
		}, speed);
	}

	function handle_reset() {
		if (typeof window !== 'undefined') {
			window.requestAnimationFrame(() => {
				set_tilt_styles(prev_style => ({
					...prev_style,
					transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
				}));
			});
		}
	}

	return (
		<div
			style={tilt_styles}
			ref={element}
			onMouseEnter={handle_on_mouse_enter}
			onMouseMove={handle_on_mouse_move}
			onMouseLeave={handle_on_mouse_leave}>
			{children}
		</div>
	);
}

export default Hover;
