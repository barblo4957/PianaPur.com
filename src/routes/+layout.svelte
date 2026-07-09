<script lang="ts">
	import './layout.css';
	import { inject } from '@vercel/analytics';

	let { children } = $props();
	inject();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/images/logo.png" />
	<link rel="apple-touch-icon" href="/images/logo.png" />
	<title>Ocieplanie Pianką PUR i Celulozą - FHU Marcin Kubik - Śląsk, Opole, Małopolska</title>
	<meta
		name="description"
		content="Zapewniamy pełną szczelność, oszczędność energii i komfort przez cały rok. Ocieplanie pianą PUR i celulozą — woj. śląskie, opolskie i małopolskie. FHU Marcin Kubik."
	/>
	<meta property="og:site_name" content="PianaPur — FHU Marcin Kubik" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.pianapur.com" />
	<meta property="og:title" content="Ocieplanie Pianką PUR i Celulozą — FHU Marcin Kubik" />
	<meta
		property="og:description"
		content="Piana PUR i celuloza — kompleksowa izolacja dachów i stropów. Działamy w woj. śląskim, opolskim i małopolskim. Bezpłatna wycena."
	/>
	<meta property="og:image" content="https://www.pianapur.com/images/natrysk.webp" />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="1200" />
	<meta property="og:locale" content="pl_PL" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ocieplanie Pianką PUR i Celulozą — FHU Marcin Kubik" />
	<meta
		name="twitter:description"
		content="Piana PUR i celuloza — kompleksowa izolacja dachów i stropów. Śląsk, Opolskie, Małopolska."
	/>
	<meta name="twitter:image" content="https://www.pianapur.com/images/natrysk.webp" />
</svelte:head>

<div class="min-h-dvh bg-background font-sans text-primary antialiased">
	{@render children()}
</div>
