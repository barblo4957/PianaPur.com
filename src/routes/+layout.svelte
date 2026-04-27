<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Analytics } from '@vercel/analytics/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Ocieplanie Pianką PUR i Celulozą - FHU Marcin Kubik - Śląsk, Opole, Małopolska</title>
	<meta
		name="description"
		content="Zapewniamy pełną szczelność, oszczędność energii i komfort przez cały rok. Latem chronimy przed upałem, zimą przed utratą ciepła. Ocieplanie pianą PUR i celulozą — woj. śląskie, opolskie i małopolskie. FHU Marcin Kubik."
	/>
</svelte:head>

<div class="min-h-dvh bg-background font-sans text-primary antialiased">
	{@render children()}
	<Analytics />
</div>
