<script lang='ts'>
	import { onMount } from 'svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
	const faceValues = [1, 2, 3, 4, 5, 6];

	let winningNumbers = [5, 6];
	const winSounds = [
		'/sounds/win1.wav',
		'/sounds/win2.wav',
		'/sounds/win3.wav',
		'/sounds/win4.wav',
		'/sounds/win5.wav',
		'/sounds/win6.wav',
		'/sounds/win7.wav',
		'/sounds/win8.wav',
		'/sounds/win9.wav',
		'/sounds/win10.wav',
		'/sounds/win11.wav'
	];

	let loosingNumbers = [1, 2];
	const loseSounds = [
		'/sounds/fail1.wav',
		'/sounds/fail2.wav',
		'/sounds/fail3.wav',
		'/sounds/fail4.wav',
		'/sounds/fail5.wav',
		'/sounds/fail6.wav',
		'/sounds/fail7.wav',
		'/sounds/fail8.wav'
	];

	let rollSoundEnabled = true;
	const rollSound = '/sounds/roll.wav';

	let currentFace = '⛶';
	let isRolling = false;
	let rollAudio;

	onMount(() => {
		rollAudio = new Audio(rollSound);
		rollAudio.load();
	});

	function startRoll() {
		if (isRolling) return;
		isRolling = true;

		if (rollAudio && rollSoundEnabled) {
			rollAudio.currentTime = 0;
			rollAudio.play().catch(() => {});
		}

		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * faces.length);
			currentFace = faces[randomIndex];
		}, 100); // Update every 100ms

		setTimeout(() => {
			clearInterval(interval);

			const finalIndex = Math.floor(Math.random() * faces.length);
			const numberRolled = faceValues[finalIndex];
			currentFace = faces[finalIndex];

			isRolling = false;

			if (winningNumbers.includes(numberRolled)) {
				const winSound = new Audio(winSounds[Math.floor(Math.random() * winSounds.length)]);
				winSound.play().catch(() => {});
			} else if(loosingNumbers.includes(numberRolled)) {
				const loseSound = new Audio(loseSounds[Math.floor(Math.random() * loseSounds.length)]);
				loseSound.play().catch(() => {});
			}
		}, 1500); // Roll for 1.5 second
	}
</script>

<style>
	.dice-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem;
	}

	.dice-text {
		font-size: min(60vw, 280px);
		line-height: 1;
		color: var(--text);
	}

	.shaking {
		animation: shake 0.1s infinite;
		color: var(--text-muted);
	}

	@keyframes shake {
		0% { transform: rotate(0deg); }
		25% { transform: rotate(10deg); }
		50% { transform: rotate(0deg); }
		75% { transform: rotate(-10deg); }
		100% { transform: rotate(0deg); }
	}

	button {
		padding: 10px 20px;
		font-size: 1rem;
		cursor: pointer;
		background: var(--accent);
		color: white;
		border: none;
		border-radius: var(--radius);
		transition: background 0.2s;
		box-shadow: var(--box-shadow);
		transition: var(--transition);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		box-shadow: none;
		transition: none;
	}

	.checkbox-group {
		display: flex;
		gap: 15px;
		margin: 10px 0;
	}

	.checkbox-label {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}
</style>

<svelte:head>
	<title>Dice</title>
	<meta name='description' content='Roll a Dice'/>
	<meta name='robots' content='noindex, noarchive, nocache, nosnippet'/>
</svelte:head>

<div class="dice-container">
	<div class="dice-text {isRolling ? 'shaking' : ''}">
		{currentFace}
	</div>

	<button onmousedown={startRoll} disabled={isRolling}>
		{isRolling ? 'Rolling...' : 'Roll Dice'}
	</button>
</div>

<Accordion name='Settings'>
	{#snippet head()}
		Settings
	{/snippet}
	{#snippet details()}
		<p>
			<label>
				<input type="checkbox" bind:checked={rollSoundEnabled}/>
				Play rolling sound
			</label>
		</p>
		<div>
			<div>Play happy sound on:</div>
			<div class="checkbox-group">
				{#each faceValues as val}
					<label class="checkbox-label">
						<input type="checkbox" value={val} bind:group={winningNumbers}/>
						{val}
					</label>
				{/each}
			</div>
		</div>
		<div>
			<div>Play sad sound on:</div>
			<div class="checkbox-group">
				{#each faceValues as val}
					<label class="checkbox-label">
						<input type="checkbox" value={val} bind:group={loosingNumbers}/>
						{val}
					</label>
				{/each}
			</div>
		</div>
		{#if winningNumbers.some(num => loosingNumbers.includes(num))}
			<div style="color: red;">
				You cannot play both happy and sad sounds for the same number!
			</div>
		{/if}
	{/snippet}
</Accordion>