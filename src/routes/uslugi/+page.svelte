<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const services = [
		{
			slug: 'piana-poddasze',
			title: 'Piana PUR — poddasze',
			short: 'Natrysk piany poliuretanowej na połacie dachowe i skosy. Szczelna izolacja bez mostków termicznych — gotowa pod zabudowę GK.',
			details: [
				'Aplikacja na OSB, blachę, membranę i deskowanie',
				'Wydajność do 300 m² dziennie',
				'Gotowe poddasze — bez surowego natrysku',
				'Własny sprzęt hydrauliczny z zasilaniem'
			],
			image: '/images/natrysk.webp',
			alt: 'Natrysk piany PUR na poddaszu'
		},
		{
			slug: 'piana-strop',
			title: 'Piana PUR — strop',
			short: 'Izolacja stropów pianą poliuretanową. Eliminuje mostki termiczne i uszczelnia przestrzeń między kondygnacjami.',
			details: [
				'Idealna do stropów drewnianych i betonowych',
				'Eliminacja mostków termicznych',
				'Dodatkowa izolacja akustyczna',
				'Szybka realizacja bez rozbiórki'
			],
			image: '/images/natrysk.webp',
			alt: 'Izolacja stropu pianą PUR'
		},
		{
			slug: 'piana-zamknieta',
			title: 'Piana zamkniętokomórkowa',
			short: 'Twarda piana o wysokiej gęstości — idealna do ścian zewnętrznych, fundamentów i miejsc narażonych na wilgoć.',
			details: [
				'Wysoka odporność na wilgoć i wodę',
				'Lepsza izolacyjność przy mniejszej grubości',
				'Wzmacnia konstrukcję budynku',
				'Stosowana na fundamenty i ściany zewnętrzne'
			],
			image: '/images/natrysk.webp',
			alt: 'Piana zamkniętokomórkowa na ścianie'
		},
		{
			slug: 'celuloza',
			title: 'Ocieplanie celulozą',
			short: 'Ekologiczne ocieplenie metodą wdmuchiwania celulozą Isocell. Idealne dla starszych domów bez konieczności rozbiórki.',
			details: [
				'Materiał z recyclingu papieru',
				'Wdmuchiwanie bez rozbiórki stropu',
				'Idealna dla starych stropów z małą przestrzenią',
				'Dostępna w całym obszarze działania'
			],
			image: '/images/natrysk.webp',
			alt: 'Wdmuchiwanie celulozy na stropie'
		},
		{
			slug: 'fundamenty',
			title: 'Izolacja fundamentów',
			short: 'Natrysk piany zamkniętokomórkowej na fundamenty. Skuteczna bariera przeciwwilgociowa i termiczna dla całego budynku.',
			details: [
				'Wysoka odporność na wilgoć i wodę gruntową',
				'Ochrona przed przemarzaniem fundamentów',
				'Trwałość na dziesięciolecia',
				'Szybka aplikacja bez naruszania konstrukcji'
			],
			image: '/images/natrysk.webp',
			alt: 'Izolacja fundamentów pianą'
		},
		{
			slug: 'zabudowa-gk',
			title: 'Zabudowa płytami GK',
			short: 'Kompleksowe wykończenie poddasza — od izolacji po zabudowę płytami GK gotową do pierwszego malowania.',
			details: [
				'Montaż uchwytów i obróbka okien dachowych',
				'Zabudowa GK z ociepleniem do etapu malowania',
				'Gładzie gipsowe natryskowe',
				'Malowanie agregatem — jedna ekipa od początku do końca'
			],
			image: '/images/natrysk.webp',
			alt: 'Zabudowa płytami GK na poddaszu'
		}
	] as const;

</script>

<svelte:head>
	<title>Usługi — piana PUR, celuloza, zabudowa GK | PianaPur</title>
	<meta
		name="description"
		content="Natrysk piany PUR, ocieplanie celulozą, izolacja fundamentów i zabudowa GK. Kompleksowa obsługa od wyceny po gotowe poddasze. Śląsk, Opolskie, Małopolska."
	/>
</svelte:head>

<Navbar />

<main>
	<section class="border-b border-primary/10 py-20 sm:py-28">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div class="min-w-0">
					<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
						Usługi
					</p>
					<h1 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
						Kompleksowa izolacja — od wyceny po gotowe poddasze
					</h1>
					<p class="mt-6 font-sans text-base leading-relaxed text-primary/80">
						Dobieramy metodę do konstrukcji i potrzeb inwestycji. Pracujemy własnym sprzętem hydraulicznym z
						zasilaniem — przyjeżdżamy i działamy niezależnie od etapu budowy.
					</p>
					<div class="mt-8 flex flex-wrap gap-6 font-sans text-sm text-primary/70">
						<span>✓ Własny sprzęt i zasilanie</span>
						<span>✓ Bezpłatna wycena i dojazd</span>
						<span>✓ 3 województwa</span>
						<span>✓ Od 2010 roku</span>
					</div>
					<div class="mt-8">
						<a
							href="tel:667488358"
							class="nav-cta-glow inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
						>
							📞 Zadzwoń po wycenę
						</a>
					</div>
				</div>
				<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
					<img
						src="/images/natrysk.webp"
						alt="Natrysk piany PUR — FHU Marcin Kubik"
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
			<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
				Co oferujemy
			</h2>
			<div class="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
				{#each services as { title, short, details, image, alt }, i}
					<article
						class="flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-primary/[0.02] shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_14px_32px_-14px_rgba(15,23,42,0.22)]"
					>
						<img src={image} {alt} class="w-full object-cover" style="aspect-ratio: 16/9;" loading="lazy" />
						<div class="flex flex-1 flex-col p-5">
							<span class="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 class="font-display text-lg font-bold leading-snug text-primary">{title}</h3>
							<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">{short}</p>
							<ul class="mt-4 space-y-1.5">
								{#each details as detail}
									<li class="flex items-start gap-2 font-sans text-xs text-primary/65">
										<span class="mt-0.5 text-accent" aria-hidden="true">✓</span>
										{detail}
									</li>
								{/each}
							</ul>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-slate-50 py-20 sm:py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
				Piana otwarto- vs zamkniętokomórkowa
			</h2>
			<p class="mt-4 max-w-2xl font-sans text-base leading-relaxed text-primary/75">
				Dobór rodzaju piany zależy od miejsca aplikacji i wymagań konstrukcji. Na spotkaniu doradzimy co ma sens
				w Twoim przypadku.
			</p>
			<div class="mt-10 grid gap-6 sm:grid-cols-2">
				<div class="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm">
					<p class="font-sans text-xs font-semibold uppercase tracking-wider text-accent">Otwartokomórkowa</p>
					<h3 class="mt-2 font-display text-xl font-bold text-primary">Miękka i elastyczna</h3>
					<p class="mt-3 font-sans text-sm leading-relaxed text-primary/70">
						Idealna do poddaszy, dachów i stropów wewnętrznych. Przepuszcza parę wodną — wymaga paroizolacji.
						Dobra izolacyjność przy większej grubości warstwy.
					</p>
					<ul class="mt-4 space-y-2">
						{#each ['Poddasza i skosy dachowe', 'Stropy wewnętrzne', 'Lepsza akustyka', 'Niższa cena'] as item}
							<li class="flex items-center gap-2 font-sans text-sm text-primary/75">
								<span class="text-accent">✓</span>{item}
							</li>
						{/each}
					</ul>
				</div>
				<div class="rounded-2xl border border-accent/25 bg-accent/5 p-6 shadow-sm">
					<p class="font-sans text-xs font-semibold uppercase tracking-wider text-accent">
						Zamkniętokomórkowa
					</p>
					<h3 class="mt-2 font-display text-xl font-bold text-primary">Twarda i wodoodporna</h3>
					<p class="mt-3 font-sans text-sm leading-relaxed text-primary/70">
						Idealna do fundamentów, ścian zewnętrznych i miejsc narażonych na wilgoć. Zamknięte pory tworzą
						naturalną barierę. Wyższa izolacyjność przy mniejszej grubości.
					</p>
					<ul class="mt-4 space-y-2">
						{#each ['Fundamenty i piwnice', 'Ściany zewnętrzne', 'Bariera przeciwwilgociowa', 'Wzmacnia konstrukcję'] as item}
							<li class="flex items-center gap-2 font-sans text-sm text-primary/75">
								<span class="text-accent">✓</span>{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-accent/5 py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
				<div>
					<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Nie wiesz którą metodę wybrać?
					</h2>
					<p class="mt-2 font-sans text-base text-primary/70">
						Zadzwoń — doradzimy i przygotujemy bezpłatną wycenę dla Twojej inwestycji.
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
