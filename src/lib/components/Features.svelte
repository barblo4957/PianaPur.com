<script lang="ts">
	const items = [
		{
			title: 'Precyzja i szczelność',
			body: 'Natrysk dociera w trudno dostępne miejsca — wypełnia szczeliny i tworzy ciągłą warstwę przylegającą do podłoża.'
		},
		{
			title: 'Trwałość na lata',
			body: 'Piana nie kurczy się ani nie degraduje z upływem lat — raz położona izolacja zachowuje swoje właściwości przez całą żywotność budynku.'
		},
		{
			title: 'Ochrona przed pleśnią',
			body: 'Materiał jest odporny na rozwój grzybów oraz nie stanowi pożywki dla szkodników.'
		},
		{
			title: 'Bezpieczeństwo pożarowe',
			body: 'Stosowany poliuretan ma właściwości samogaszące — ważne w ocenie dla obiektów mieszkalnych i użytkowych.'
		},
		{
			title: 'Zdrowie i ekologia',
			body: 'Brak uciążliwych alergenów i lotnych toksyn po związaniu piany — komfort dla domowników.'
		},
		{
			title: 'Izolacja akustyczna',
			body: 'Warstwa piany ogranicza przenoszenie dźwięku — doceniana na poddaszach i w ścianach działowych.'
		},
		{
			title: 'Lekka konstrukcja',
			body: 'Piana waży znacznie mniej niż tradycyjne materiały izolacyjne — nie obciąża konstrukcji dachu.'
		},
		{
			title: 'Szybka realizacja',
			body: 'Wydajność aplikacji do ok. 300 m² dziennie — krótszy czas prac na budowie przy zachowaniu jakości.'
		}
	] as const;

	const processPoints = [
		{
			label: 'Podłoża',
			text: 'Aplikacja na m.in. OSB, blachę, membranę dachową oraz deskowanie — po przygotowaniu powierzchni zgodnie z WT.'
		},
		{
			label: 'Technologia',
			text: 'Natrysk reakcyjny na mokro — piana pływa po podłożu, wypełnia przestrzeń i zasycha jako spójna izolacja.'
		},
		{
			label: 'Terminy',
			text: 'Tempo prac zależy od powierzchni i układu przegród; orientacyjnie do 300 m²/dziennie przy sprzyjających warunkach.'
		}
	] as const;
</script>

<section id="features" class="scroll-mt-24 border-b border-primary/10 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">Korzyści z piany PUR</h2>
		<p class="mt-4 max-w-2xl font-sans text-primary/75">
			Wszystko, co warto wiedzieć przed decyzją.
		</p>

		<ul class="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
			{#each items as { title, body }, i}
				<li
					class="flex gap-4 rounded-2xl border border-primary/10 bg-primary/[0.02] p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_14px_32px_-14px_rgba(15,23,42,0.22)]"
				>
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20 font-display text-sm font-bold text-primary"
						aria-hidden="true">{i + 1}</span>
					<div class="min-w-0">
						<h3 class="font-display text-base font-bold leading-snug text-primary">{title}</h3>
						<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">{body}</p>
					</div>
				</li>
			{/each}
		</ul>

		<div
			class="mt-14 rounded-2xl border border-accent/25 bg-linear-to-br from-accent/10 to-transparent p-6 sm:p-8"
			aria-labelledby="process-heading"
		>
			<h3 id="process-heading" class="font-display text-xl font-bold text-primary sm:text-2xl">
				Wydajność / proces
			</h3>
			<p class="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-primary/75">
				Realizacja obejmuje przygotowanie obiektu, dobranie systemu piany do konstrukcji oraz natrysk. Warstwa
				przylega do typowych okładzin dachowych i ścianowych — w praktyce często spotykamy się z
				<strong class="font-semibold text-primary">OSB</strong>,
				<strong class="font-semibold text-primary">blachą</strong> (np. rąbek, płyta na konstrukcji),
				<strong class="font-semibold text-primary">membraną</strong> oraz
				<strong class="font-semibold text-primary">deskowaniem</strong>. Właściwa przyczepność i szczelność
				zależą od czystości, suchego podłoża i zaleceń producenta chemii.
			</p>
			<ul class="mt-6 grid gap-4 sm:grid-cols-3">
				{#each processPoints as { label, text }}
					<li class="rounded-xl bg-background/80 p-4 shadow-sm ring-1 ring-primary/10">
						<p class="font-sans text-xs font-semibold uppercase tracking-wide text-accent">{label}</p>
						<p class="mt-2 font-sans text-sm leading-relaxed text-primary/75">{text}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
