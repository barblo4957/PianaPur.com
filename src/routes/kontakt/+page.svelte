<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CallButton from '$lib/components/CallButton.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Kontakt — bezpłatna wycena | PianaPur FHU Marcin Kubik</title>
	<meta
		name="description"
		content="Skontaktuj się z FHU Marcin Kubik. Bezpłatna wycena i dojazd do klienta. Działamy w województwach śląskim, opolskim i małopolskim."
	/>
	<meta property="og:url" content="https://www.pianapur.com/kontakt" />
	<meta property="og:title" content="Kontakt — bezpłatna wycena | PianaPur FHU Marcin Kubik" />
	<meta property="og:image" content="https://www.pianapur.com/images/natrysk.webp" />
</svelte:head>

<Navbar />
<CallButton />

<main>
	<section class="border-b border-primary/10 py-12 sm:py-28">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div class="min-w-0">
					<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
						Kontakt
					</p>
					<h1 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
						Bezpłatna wycena — przyjedziemy i doradzimy
					</h1>
					<p class="mt-6 font-sans text-base leading-relaxed text-primary/80">
						Opisz inwestycję — powierzchnia, lokalizacja, etap budowy. Przygotujemy zestawienie i terminy bez
						żadnych ukrytych opłat.
					</p>
					<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
						<a
							href="tel:667488358"
							class="nav-cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
						>
							📞 Zadzwoń — 667 488 358
						</a>
						<a
							href="#contact"
							class="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-sans text-sm font-semibold text-primary transition duration-200 ease-out hover:border-accent hover:text-accent"
						>
							Napisz do nas
						</a>
					</div>
					<div class="mt-8 flex flex-wrap gap-6 font-sans text-sm text-primary/70">
						<span>✓ Darmowa wycena</span>
						<span>✓ Dojazd bezpłatny</span>
						<span>✓ 5.0 ⭐ w Google</span>
					</div>
				</div>
				<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
					<img
						src="/images/bus.webp"
						alt="Firmowy samochód FHU Marcin Kubik — ocieplenia pianą PUR"
						class="w-full rounded-2xl object-cover shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)]"
						style="aspect-ratio: 16/9;"
						loading="eager"
					/>
				</figure>
			</div>
		</div>
	</section>

	<FAQ />
	<Contact />
</main>

<Footer />
