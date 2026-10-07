<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CallButton from '$lib/components/CallButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { BrickWall, Check, House, Layers, PanelsTopLeft, Triangle, Warehouse } from 'lucide-svelte';

	const pageUrl = 'https://www.pianapur.com/welna-wdmuchiwana';
	const title = 'Wełna wdmuchiwana — celuloza i wełna mineralna | PianaPur';
	const description =
		'Ocieplenie poddasza, stropów i ścian wełną wdmuchiwaną: celuloza oraz wełna mineralna Knauf Supafil i URSA PUREFLOC. Szybki montaż, bez demontażu zabudowy. Bezpłatna wycena.';
	const ogTitle = 'Wełna wdmuchiwana — celuloza i wełna mineralna';
	const ogDescription =
		'Ocieplamy poddasza, stropy i ściany metodą wdmuchiwania. Celuloza, Knauf Supafil, URSA PUREFLOC.';
	const ogImage = 'https://www.pianapur.com/images/celuloza-1600.webp';

	const materials = [
		{
			name: 'Celuloza',
			badge: 'wełna celulozowa',
			description:
				'Izolacja z rozwłóknionej makulatury z dodatkiem środków zwiększających odporność na ogień, pleśń i szkodniki. Naturalny, ekologiczny materiał o parametrach izolacyjnych zbliżonych do wełny mineralnej.',
			features: [
				'dobrze trzyma ciepło zimą i chroni przed przegrzewaniem poddasza latem',
				'reguluje wilgotność — przyjmuje i oddaje parę wodną',
				'dobrze wycisza',
				'materiał z recyklingu, przyjazny środowisku'
			],
			usage: 'stropy poddaszy nieużytkowych, skosy dachowe, stropy drewniane, ściany szkieletowe.'
		},
		{
			name: 'Knauf Supafil',
			badge: 'wełna mineralna szklana',
			description:
				'Biała wełna mineralna produkowana ze stłuczki szklanej, bez dodatku spoiwa, zabezpieczona przed wodą. Materiał do profesjonalnego wdmuchiwania agregatem.',
			features: [
				'niepalna — klasa reakcji na ogień A1',
				'hydrofobizowana — odporna na nasiąkanie',
				'nie osiada w trakcie użytkowania (klasa S1 przy wdmuchiwaniu)',
				'lekka — nie obciąża starych stropów',
				'pozwala ocieplić poddasze bez demontażu istniejącej zabudowy'
			],
			usage:
				'stropy poddaszy nieużytkowych, skosy, stropy drewniane belkowe, podłogi na legarach, ściany szkieletowe, ściany dwuwarstwowe ze szczeliną powietrzną.'
		},
		{
			name: 'URSA PUREFLOC',
			badge: 'wełna mineralna szklana',
			description:
				'Wełna mineralna ze szkła z recyklingu, bez spoiwa, do nadmuchu na otwartych stropach i do wdmuchiwania w zamknięte przestrzenie.',
			features: [
				'niepalna — klasa reakcji na ogień A1',
				'bardzo dobra izolacja cieplna i akustyczna',
				'przy wdmuchiwaniu w zamknięte przestrzenie nie osiada',
				'wersja hydrofobizowana do ścian szczelinowych'
			],
			usage:
				'stropy poddaszy (nadmuch otwarty), ściany i dachy w konstrukcji szkieletowej, stropy belkowe, ściany szczelinowe.'
		}
	] as const;

	const comparison = [
		{ label: 'Surowiec', cellulose: 'makulatura', mineral: 'szkło (stłuczka / recykling)' },
		{
			label: 'Reakcja na ogień',
			cellulose: 'materiał zabezpieczony środkami ognioodpornymi',
			mineral: 'niepalna, A1'
		},
		{ label: 'Izolacja cieplna zimą', cellulose: 'bardzo dobra', mineral: 'bardzo dobra' },
		{ label: 'Ochrona przed upałem latem', cellulose: 'bardzo dobra', mineral: 'dobra' },
		{ label: 'Wilgoć', cellulose: 'reguluje wilgotność', mineral: 'hydrofobizowana, nie nasiąka' },
		{ label: 'Masa', cellulose: 'cięższa', mineral: 'lekka' },
		{ label: 'Wyciszenie', cellulose: 'bardzo dobre', mineral: 'bardzo dobre' },
		{
			label: 'Kiedy polecamy',
			cellulose: 'domy drewniane, poddasza użytkowe, inwestorzy stawiający na ekologię',
			mineral: 'stare i lekkie stropy, budynki z wymaganiami ppoż., ściany szczelinowe'
		}
	] as const;

	const applications = [
		{ label: 'Strop poddasza nieużytkowego', icon: Warehouse },
		{ label: 'Skosy dachowe i poddasze użytkowe', icon: Triangle },
		{ label: 'Stropy drewniane belkowe', icon: Layers },
		{ label: 'Podłogi na legarach', icon: PanelsTopLeft },
		{ label: 'Ściany i dachy w konstrukcji szkieletowej', icon: House },
		{ label: 'Ściany dwuwarstwowe ze szczeliną powietrzną', icon: BrickWall }
	];

	const steps = [
		{
			title: 'Oględziny i wycena',
			body: 'sprawdzamy konstrukcję, mierzymy powierzchnię, dobieramy materiał i grubość izolacji.'
		},
		{
			title: 'Przygotowanie',
			body: 'zabezpieczamy pomieszczenia, a tam, gdzie trzeba, wykonujemy otwory technologiczne.'
		},
		{
			title: 'Wdmuchiwanie',
			body: 'agregat wtłacza materiał na odpowiednią gęstość, wypełniając całą przestrzeń.'
		},
		{
			title: 'Odbiór',
			body: 'zamykamy otwory, sprzątamy i pokazujemy efekt. Poddasze o powierzchni ok. 100 m² zwykle ocieplamy w jeden dzień.'
		}
	] as const;

	const faq = [
		{
			question: 'Czy trzeba zrywać płyty G-K na poddaszu?',
			answer:
				'Zwykle nie. Izolację wdmuchujemy przez niewielkie otwory w zabudowie albo od strony stropu nad jętkami, a otwory potem zamykamy.'
		},
		{
			question: 'Ile trwa ocieplenie poddasza?',
			answer: 'Poddasze nieużytkowe o powierzchni około 100 m² zwykle robimy w jeden dzień.'
		},
		{
			question: 'Czy wełna wdmuchiwana osiada?',
			answer:
				'Przy prawidłowej gęstości wdmuchiwania — nie. Dlatego materiał aplikujemy agregatem i pilnujemy gęstości dla danej konstrukcji.'
		},
		{
			question: 'Celuloza czy wełna mineralna — co lepsze?',
			answer:
				'Oba materiały dobrze izolują. Celuloza lepiej chroni przed upałem i reguluje wilgotność, wełna mineralna jest niepalna i lżejsza. Dobór zależy od budynku — doradzimy po oględzinach.'
		},
		{
			question: 'Czy wdmuchiwanie można połączyć z pianą PUR?',
			answer:
				'Tak. W wielu budynkach skosy ocieplamy pianą, a strop poddasza nieużytkowego wełną wdmuchiwaną. Wycenę przygotujemy dla całego zakresu.'
		}
	] as const;

	const faqJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: { '@type': 'Answer', text: answer }
		}))
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={pageUrl} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="1200" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:description" content={ogDescription} />
	<meta name="twitter:image" content={ogImage} />
	{@html '<script type="application/ld+json">' + faqJsonLd + '<' + '/script>'}
</svelte:head>

<Navbar />
<CallButton />

<main>
	<section class="relative isolate flex min-h-[70svh] items-center overflow-hidden lg:min-h-[78svh]">
		<img
			src="/images/celuloza-1600.webp"
			srcset="/images/celuloza.webp 900w, /images/celuloza-1600.webp 1600w"
			sizes="100vw"
			alt="Wdmuchana izolacja między belkami stropu poddasza"
			class="absolute inset-0 -z-20 h-full w-full object-cover"
			width="1600"
			height="1200"
			loading="eager"
			fetchpriority="high"
		/>
		<div
			class="absolute inset-0 -z-10 bg-primary/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary/90 lg:via-primary/70 lg:to-primary/20"
			aria-hidden="true"
		></div>
		<div class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
			<div class="max-w-2xl">
				<h1 class="font-display text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
					Wełna wdmuchiwana — celuloza i wełna mineralna
				</h1>
				<p class="mt-6 font-sans text-base leading-relaxed text-background/85 sm:text-lg">
					Ocieplamy poddasza, stropy i ściany metodą wdmuchiwania. Materiał trafia agregatem w każdą
					szczelinę, narożnik i wnękę — bez docinania, bez łączeń, bez mostków termicznych. Pracujemy na
					celulozie oraz na wełnie mineralnej Knauf Supafil i URSA PUREFLOC.
				</p>
				<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
					<a
						href="tel:+48667488358"
						class="nav-cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
					>
						📞 Zadzwoń
					</a>
					<a
						href="/kontakt"
						class="inline-flex items-center justify-center gap-2 rounded-full border border-background/60 px-6 py-3 font-sans text-sm font-semibold text-background transition duration-200 ease-out hover:border-accent hover:text-accent"
					>
						Bezpłatna wycena
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="py-10 sm:py-24" aria-labelledby="what-heading">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<h2 id="what-heading" class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
				Czym jest wełna wdmuchiwana
			</h2>
			<div class="mt-6 space-y-4 font-sans text-base leading-relaxed text-primary/80">
				<p>
					Wełna wdmuchiwana to izolacja w postaci luźnych włókien, którą zamiast układać ręcznie z rolek czy
					płyt, wdmuchuje się specjalnym agregatem przez wąż. Dzięki temu dokładnie wypełnia całą przestrzeń —
					także tam, gdzie z wełną w rolce trudno się dostać: niskie stropy, skosy, przestrzenie między belkami,
					zamknięte ściany.
				</p>
				<p>
					Duży plus przy termomodernizacji: często nie trzeba zrywać istniejącej zabudowy. Izolację wdmuchuje
					się przez niewielkie otwory, które potem się zamyka.
				</p>
				<p>
					Stosujemy dwa rodzaje materiału — <strong class="font-semibold text-primary">celulozę</strong> i
					<strong class="font-semibold text-primary">wełnę mineralną szklaną</strong>. Dobieramy je do budynku,
					konstrukcji i oczekiwań inwestora.
				</p>
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-slate-50 py-10 sm:py-24" aria-labelledby="materials-heading">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2
				id="materials-heading"
				class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl"
			>
				Materiały, na których pracujemy
			</h2>
			<div class="mt-12 grid gap-8 lg:grid-cols-3">
				{#each materials as { name, badge, description, features, usage }}
					<article
						class="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_14px_32px_-14px_rgba(15,23,42,0.22)]"
					>
						<span
							class="self-start rounded-full bg-accent/15 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary"
						>
							{badge}
						</span>
						<h3 class="mt-4 font-display text-xl font-bold leading-snug text-primary">{name}</h3>
						<p class="mt-3 font-sans text-sm leading-relaxed text-primary/70">{description}</p>
						<ul class="mt-5 flex-1 space-y-2">
							{#each features as feature}
								<li class="flex items-start gap-2 font-sans text-sm text-primary/75">
									<Check class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
						<p class="mt-6 border-t border-primary/10 pt-4 font-sans text-sm leading-relaxed text-primary/70">
							<strong class="font-semibold text-primary">Gdzie stosujemy:</strong>
							{usage}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 py-10 sm:py-24" aria-labelledby="comparison-heading">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2
				id="comparison-heading"
				class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl"
			>
				Celuloza czy wełna mineralna?
			</h2>
			<div class="mt-10 overflow-x-auto rounded-2xl border border-primary/10 bg-background shadow-sm">
				<table class="w-full text-left font-sans text-xs sm:min-w-[36rem] sm:text-sm">
					<caption class="sr-only">Porównanie celulozy i wełny mineralnej</caption>
					<thead>
						<tr class="border-b border-primary/10 bg-primary text-background">
							<th scope="col" class="px-2.5 py-3 font-semibold sm:px-6"><span class="sr-only">Cecha</span></th>
							<th scope="col" class="px-2.5 py-3 font-semibold sm:px-6">Celuloza</th>
							<th scope="col" class="px-2.5 py-3 font-semibold sm:px-6">Wełna mineralna (Supafil, PUREFLOC)</th>
						</tr>
					</thead>
					<tbody class="text-primary/85">
						{#each comparison as { label, cellulose, mineral }, i}
							<tr class={i < comparison.length - 1 ? 'border-b border-primary/10' : ''}>
								<th scope="row" class="px-2.5 py-3 font-medium text-primary sm:px-6">{label}</th>
								<td class="px-2.5 py-3 sm:px-6">{cellulose}</td>
								<td class="px-2.5 py-3 sm:px-6">{mineral}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p class="mt-6 font-sans text-base text-primary/75">
				Nie wiesz, co wybrać? Przyjedziemy, obejrzymy budynek i doradzimy.
			</p>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-slate-50 py-10 sm:py-24" aria-labelledby="applications-heading">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2
				id="applications-heading"
				class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl"
			>
				Gdzie stosujemy wełnę wdmuchiwaną
			</h2>
			<ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each applications as { label, icon: Icon }}
					<li class="flex items-center gap-4 rounded-2xl border border-primary/10 bg-background p-5 shadow-sm">
						<span
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary"
							aria-hidden="true"
						>
							<Icon class="h-5 w-5" />
						</span>
						<span class="font-sans text-sm font-semibold leading-snug text-primary">{label}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="border-t border-primary/10 py-10 sm:py-24" aria-labelledby="steps-heading">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 id="steps-heading" class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
				Jak wygląda montaż
			</h2>
			<ol class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each steps as { title, body }, i}
					<li class="flex flex-col rounded-2xl border border-primary/10 bg-primary/[0.02] p-5 shadow-sm">
						<span
							class="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-primary"
							aria-hidden="true">{i + 1}</span
						>
						<h3 class="mt-4 font-display text-base font-bold leading-snug text-primary">{title}</h3>
						<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">{body}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-background py-10 sm:py-24" aria-labelledby="faq-heading">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
			<h2 id="faq-heading" class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
				FAQ
			</h2>
			<div class="mt-10 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-primary/[0.02] px-1">
				{#each faq as { question, answer }}
					<details class="group font-sans">
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-semibold leading-snug text-primary transition hover:bg-primary/[0.03] sm:px-5 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden"
						>
							{question}
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-background text-primary/70 transition group-open:rotate-180 group-open:border-accent/40 group-open:text-accent"
								aria-hidden="true"
							>
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</span>
						</summary>
						<div class="border-t border-primary/10 bg-background/80 px-4 pb-4 sm:px-5 sm:pb-5">
							<p class="pt-4 text-sm leading-relaxed text-primary/75">{answer}</p>
						</div>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<section class="border-t border-primary/10 bg-accent/5 py-10 sm:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
				<div>
					<h2 class="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
						Ocieplmy Twoje poddasze
					</h2>
					<p class="mt-2 font-sans text-base text-primary/70">
						Zadzwoń albo wyślij zapytanie — przyjedziemy, obejrzymy budynek i przygotujemy bezpłatną wycenę.
					</p>
				</div>
				<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
					<a
						href="tel:+48667488358"
						class="nav-cta-glow whitespace-nowrap rounded-full bg-accent px-8 py-4 text-center font-sans text-base font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_22px_-4px_rgba(245,158,11,0.75)] active:scale-[0.98]"
					>
						📞 667 488 358
					</a>
					<a
						href="/kontakt"
						class="whitespace-nowrap rounded-full border border-primary/20 px-8 py-4 text-center font-sans text-base font-semibold text-primary transition duration-200 ease-out hover:border-accent hover:text-accent"
					>
						Napisz do nas
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
