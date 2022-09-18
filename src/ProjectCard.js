import './App.css';
import languages from './lang_colors';

const ProjectCard = ({url_tail, desc, language, stars, license}) => {
	const color = languages[language].color;

	return (<div className='card'>
		<div style={{display: 'flex', alignItems: 'center'}}>
			<svg style={{marginRight: '3px', fill: 'var(--text)'}} height='16' viewBox='0 0 16 16' version='1.1' width='16'>
				<path fillRule='evenodd' d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path>
			</svg>
			<span>
				<a target='_blank' href={`https://github.com/${url_tail}`}>{url_tail}</a>
			</span>
		</div>
		<div style={{padding: '5px 0px'}}>
			{desc}
		</div>
		<div>
			<hr style={{color: 'rgba(0,0,0,0.2)'}}/>
			<div style={{display: 'flex'}}>
				<div>
					<span style={{
						width: '12px',
						height: '12px',
						borderRadius: '100%',
						backgroundColor: color,
						display: 'inline-block',
						top: '1px',
						marginRight: '3px'
					}} />
					<span>{language}</span>
				</div>
				<div style={{margin: '0px 10px'}}/>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<svg style={{marginRight: '3px', fill: 'var(--text)'}} viewBox='0 0 16 16' version='1.1' width='16'>
						<path fillRule='evenodd' d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'></path>
					</svg>
					<span>{stars}</span>
				</div>
				<div style={{margin: '0px 10px'}}/>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<svg style={{marginRight: '3px', fill: 'var(--text)'}} viewBox='0 0 16 16' version='1.1' width='16'>
						<path fillRule='evenodd' d='M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z'></path>
					</svg>
					<span>{license}</span>
				</div>
			</div>
		</div>
	</div>);
}

export default ProjectCard;
