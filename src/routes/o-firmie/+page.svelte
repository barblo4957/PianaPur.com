<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CallButton from '$lib/components/CallButton.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const services = [
		{
			title: 'Sama izolacja',
			body: 'Natrysk piany PUR lub wdmuchanie celulozy — dobieramy metodę do konstrukcji i etapu budowy.'
		},
		{
			title: 'Przygotowanie i ocieplenie dachu',
			body: 'Montaż uchwytów, obróbka okien dachowych i ocieplenie połaci — jedna ekipa, od początku do końca.'
		},
		{
			title: 'Zabudowa płytami GK',
			body: 'Płyty GK z ociepleniem do pierwszego malowania — zostawiamy gotowe poddasze, nie surowy natrysk.'
		},
		{
			title: 'Gładzie i malowanie',
			body: 'Gładzie gipsowe natryskowe oraz malowanie agregatem — przyspiesza prace i obniża koszt wykończenia.'
		},
		{
			title: 'Własne zasilanie',
			body: 'Pracujemy niezależnie od przyłącza na budowie — nie blokujemy harmonogramu prac na Twojej inwestycji.'
		},
		{
			title: 'Izolacja starych stropów',
			body: 'Mało miejsca na strychu? Wdmuchanie celulozy to najlepsze rozwiązanie dla starszych domów bez rozbiórki.'
		}
	] as const;
</script>

<svelte:head>
	<title>O firmie — FHU Marcin Kubik | PianaPur</title>
	<meta
		name="description"
		content="Poznaj FHU Marcin Kubik — specjalistów od izolacji pianą PUR i celulozą od 2010 roku. Własny sprzęt, profesjonalna ekipa, 3 województwa."
	/>
	<meta property="og:url" content="https://www.pianapur.com/o-firmie" />
	<meta property="og:title" content="O firmie — FHU Marcin Kubik | PianaPur" />
	<meta property="og:image" content="https://www.pianapur.com/images/natrysk.webp" />
</svelte:head>

<Navbar />
<CallButton />

<main>
	<section class="py-12 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div class="min-w-0">
					<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
						O firmie
					</p>
					<h1 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
						Izolujemy dachy i stropy od 2010 roku — jedna ekipa, pełna odpowiedzialność
					</h1>
					<p class="mt-6 font-sans text-base leading-relaxed text-primary/80">
						Zaczęliśmy od kompleksowej zabudowy poddaszy. W 2016 roku rozszerzyliśmy działalność o natrysk
						pianą PUR — technologię która zrewolucjonizowała izolację dachów w Polsce. Dziś oferujemy również
						ocieplenia wdmuchiwane celulozą Isocell oraz wełną.
					</p>
					<p class="mt-4 font-sans text-base leading-relaxed text-primary/80">
						Pracujemy na profesjonalnym sprzęcie hydraulicznym z własnym zasilaniem — nie jesteśmy uzależnieni
						od przyłącza na budowie. Przyjeżdżamy i działamy, niezależnie od etapu inwestycji.
					</p>
					<p class="mt-4 font-sans text-base leading-relaxed text-primary/80">
						Działamy na terenie województw <strong class="font-semibold text-primary">śląskiego</strong>,
						<strong class="font-semibold text-primary">opolskiego</strong> i
						<strong class="font-semibold text-primary">małopolskiego</strong>. Wycena i dojazd do klienta
						bezpłatne.
					</p>
				</div>
				<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
					<img
						src="/images/natrysk.webp"
						alt="Pracownik FHU Marcin Kubik podczas natrysku pianą PUR"
						class="w-full rounded-2xl object-cover shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)]"
						style="aspect-ratio: 4/3;"
						loading="eager"
					/>
				</figure>
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 py-10 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
				Jak działamy
			</h2>
			<p class="mt-4 max-w-2xl font-sans text-base leading-relaxed text-primary/75">
				Kompleksowa obsługa od wyceny po gotowe poddasze — bez podwykonawców.
			</p>
			<ul class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{#each services as { title, body }, i}
					<li
						class="flex gap-4 rounded-2xl border border-primary/10 bg-primary/[0.02] p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_14px_32px_-14px_rgba(15,23,42,0.22)]"
					>
						<span
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-primary"
							aria-hidden="true">{i + 1}</span
						>
						<div class="min-w-0">
							<h3 class="font-display text-base font-bold leading-snug text-primary">{title}</h3>
							<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">{body}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-accent/5 py-10 sm:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
				<div>
					<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Bezpłatna wycena — bez zobowiązań
					</h2>
					<p class="mt-2 font-sans text-base text-primary/70">
						Zadzwoń lub napisz — doradzimy i przygotujemy wycenę dla Twojej inwestycji.
					</p>
				</div>
				<a
					href="tel:667488358"
					class="nav-cta-glow whitespace-nowrap rounded-full bg-accent px-8 py-4 font-sans text-base font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_22px_-4px_rgba(245,158,11,0.75)] active:scale-[0.98]"
				>
					Zadzwoń — 667 488 358
				</a>
			</div>
		</div>
	</section>
</main>
<Footer />
