<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CallButton from '$lib/components/CallButton.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const photos = [
		{ src: '/images/realizacja - piana poddasze.webp', alt: 'Piana PUR na poddaszu', category: 'Piana PUR — poddasze' },
		{ src: '/images/realizacja - piana poddasze 2.webp', alt: 'Piana PUR na poddaszu — widok ogólny', category: 'Piana PUR — poddasze' },
		{ src: '/images/realizacja - piana poddasze 3.webp', alt: 'Piana PUR na poddaszu — szczegół', category: 'Piana PUR — poddasze' },
		{ src: '/images/realizacja - piana zamknietokomorkowa.webp', alt: 'Piana zamkniętokomórkowa', category: 'Piana zamkniętokomórkowa' },
		{ src: '/images/realizacja - ocieplenie scian.webp', alt: 'Ocieplenie ścian pianą', category: 'Piana zamkniętokomórkowa' },
		{ src: '/images/realizacja - celuloza.webp', alt: 'Ocieplanie celulozą', category: 'Celuloza' },
		{ src: '/images/realizacja - fundament.webp', alt: 'Izolacja fundamentów', category: 'Fundamenty' },
		{ src: '/images/realizacja - fundament 2.webp', alt: 'Izolacja fundamentów — widok boczny', category: 'Fundamenty' },
		{ src: '/images/realizacja - zabudowa gk.webp', alt: 'Zabudowa płytami GK', category: 'Zabudowa GK' },
		{ src: '/images/realizacja - zabudowa gk 2.webp', alt: 'Zabudowa GK — gotowe poddasze', category: 'Zabudowa GK' },
	] as const;

	let lightboxOpen = $state(false);
	let lightboxSrc = $state('');
	let lightboxAlt = $state('');
	let currentIndex = $state(0);

	function openLightbox(src: string, alt: string) {
		currentIndex = photos.findIndex((p) => p.src === src && p.alt === alt);
		lightboxSrc = src;
		lightboxAlt = alt;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
		lightboxSrc = photos[currentIndex].src;
		lightboxAlt = photos[currentIndex].alt;
	}

	function next() {
		currentIndex = (currentIndex + 1) % photos.length;
		lightboxSrc = photos[currentIndex].src;
		lightboxAlt = photos[currentIndex].alt;
	}

	$effect(() => {
		if (lightboxOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<svelte:head>
	<title>Realizacje — galeria zdjęć | PianaPur FHU Marcin Kubik</title>
	<meta
		name="description"
		content="Zobacz nasze realizacje — natrysk piany PUR, ocieplanie celulozą, izolacja fundamentów i zabudowa GK. Śląsk, Opolskie, Małopolska."
	/>
</svelte:head>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}}
/>

<Navbar />
<CallButton />

<main>
	<section class="border-b border-primary/10 py-20 sm:py-28">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div class="min-w-0">
					<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
						Realizacje
					</p>
					<h1 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
						Każda realizacja — inna konstrukcja, ten sam efekt
					</h1>
					<p class="mt-6 font-sans text-base leading-relaxed text-primary/80">
						Piana PUR i celuloza w akcji — dwie technologie, jeden efekt. Działamy na terenie województw
						śląskiego, opolskiego i małopolskiego.
					</p>
					<div class="mt-8 flex flex-wrap gap-6 font-sans text-sm text-primary/70">
						<span>✓ Piana PUR</span>
						<span>✓ Celuloza</span>
						<span>✓ Zabudowa GK</span>
						<span>✓ Fundamenty</span>
					</div>
				</div>
				<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
					<img
						src="/images/realizacje-hero.webp"
						alt="Realizacja izolacji pianą PUR — FHU Marcin Kubik"
						class="w-full rounded-2xl object-cover shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)]"
						style="aspect-ratio: 4/3;"
						loading="eager"
					/>
				</figure>
			</div>
		</div>
	</section>

	<section class="py-20 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{#each photos as { src, alt, category }}
					<button
						type="button"
						class="group relative overflow-hidden rounded-2xl border border-primary/10 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-14px_rgba(15,23,42,0.22)] focus:outline-none focus:ring-2 focus:ring-accent/50"
						onclick={() => openLightbox(src, alt)}
						aria-label="Powiększ zdjęcie: {alt}"
					>
						<img
							{src}
							{alt}
							class="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
							loading="lazy"
						/>
						<div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/70 to-transparent p-4 opacity-0 transition duration-200 group-hover:opacity-100">
							<span class="font-sans text-xs font-semibold text-background">{category}</span>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-accent/5 py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
				<div>
					<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Chcesz podobny efekt u siebie?
					</h2>
					<p class="mt-2 font-sans text-base text-primary/70">
						Zadzwoń po bezpłatną wycenę — przyjedziemy i doradzimy.
					</p>
				</div>
				<a
					href="tel:667488358"
					class="nav-cta-glow whitespace-nowrap rounded-full bg-accent px-8 py-4 font-sans text-base font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_22px_-4px_rgba(245,158,11,0.75)] active:scale-[0.98]"
				>
					📞 667 488 358
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />

{#if lightboxOpen}
	<div
		style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);padding:1rem;"
		role="dialog"
		aria-modal="true"
		onclick={closeLightbox}
	>
		<button
			type="button"
			style="position:absolute;top:1rem;right:1rem;z-index:10000;width:2.5rem;height:2.5rem;border-radius:9999px;background:rgba(255,255,255,0.15);color:white;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;"
			onclick={closeLightbox}
			aria-label="Zamknij"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		</button>
		<button
			type="button"
			style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);z-index:10000;width:2.5rem;height:2.5rem;border-radius:9999px;background:rgba(255,255,255,0.15);color:white;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;"
			onclick={(e) => {
				e.stopPropagation();
				prev();
			}}
			aria-label="Poprzednie zdjęcie"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<button
			type="button"
			style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);z-index:10000;width:2.5rem;height:2.5rem;border-radius:9999px;background:rgba(255,255,255,0.15);color:white;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;"
			onclick={(e) => {
				e.stopPropagation();
				next();
			}}
			aria-label="Następne zdjęcie"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M9 18l6-6-6-6" />
			</svg>
		</button>
		<img
			src={lightboxSrc}
			alt={lightboxAlt}
			style="max-height:90vh;max-width:90vw;border-radius:0.75rem;object-fit:contain;"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
