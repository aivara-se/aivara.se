<svelte:head>
	<title>Aivara</title>
	<meta name="description" content="Aivara — our new site is on its way." />
</svelte:head>

<main>
	<img src="/logo.svg" alt="" width="120" height="120" />
	<h1>Aivara</h1>
	<p>Our new site is on its way.</p>
</main>

<style>
	:global(html, body) {
		margin: 0;
		height: 100%;
	}

	:global(body) {
		background: #0b0b12;
		color: #f2f2f5;
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			sans-serif;
	}

	main {
		display: flex;
		min-height: 100dvh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(2rem, 8vw, 3.5rem);
		letter-spacing: -0.02em;
	}

	p {
		margin: 0;
		font-size: 1.125rem;
		color: #a9a9b8;
	}
</style>
