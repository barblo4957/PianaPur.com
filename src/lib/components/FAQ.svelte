<script lang="ts">
	const items = [
		{
			id: 'faq-trwanie',
			question: 'Jak długo trwa ocieplanie?',
			answer:
				'Czas zależy od metrażu, układu konstrukcji (np. płatwie, skosy, liczba przegród) oraz warunków na budowie. Przy natrysku piany PUR orientacyjnie możliwa jest wydajność rzędu do ok. 300 m² dziennie — dokładny harmonogram ustalamy po oględzinach, bo wpływ mają też przygotowanie podłoża (np. OSB, blacha, membrana, deskowanie) i dostęp do przestrzeni roboczej. Ocieplanie celulozą oparte na wdmuchiwaniu ma inne tempo i wymaga osobnej organizacji prac; po audycie obiektu podajemy realny termin końca etapu.'
		},
		{
			id: 'faq-zdrowie',
			question: 'Czy piana jest bezpieczna dla zdrowia?',
			answer:
				'Stosujemy certyfikowane systemy pian zgodnie z kartą produktu i warunkami technicznymi. Po pełnym związaniu warstwy nie obserwuje się na ogół uciążliwych emisji dla domowników — zgodnie z wcześniejszą treścią na stronie: brak uciążliwych alergenów i lotnych toksyn po związaniu piany to ważny argument komfortowy. W trakcie natrysku obowiązują środki ochrony dla ekipy, ograniczenie dostępu do strefy roboczej i wentylacja zgodna z instrukcją; po schłodzeniu i przewietrzeniu obiekt można przekazać do użytkowania według zaleceń producenta chemii.'
		},
		{
			id: 'faq-zima',
			question: 'Czy można ocieplać zimą?',
			answer:
				'Tak, ale zawsze pod warunkiem spełnienia wymagań producenta piany co do temperatury otoczenia i podłoża oraz odpowiedniej wilgotności materiałów. W bardzo niskich temperaturach bywa konieczne dogrzanie obiektu lub przesunięcie terminu, żeby reakcja i przyczepność były prawidłowe. Na etapie wyceny i przed startem prac oceniamy prognozę i stan konstrukcji — jeśli warunki są graniczne, proponujemy bezpieczny wariant (inną datę lub dodatkowe przygotowanie), żeby nie ryzykować jakości izolacji i gwarancji szczelności.'
		}
	] as const;

	let openId = $state<string | null>(null);

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="scroll-mt-24 border-b border-primary/10 bg-background py-20 sm:py-24" aria-labelledby="faq-heading">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<h2 id="faq-heading" class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
			Najczęstsze pytania
		</h2>
		<p class="mt-4 font-sans text-primary/75">
			Krótko i merytorycznie — te same tematy omawiamy też na miejscu, przy oględzinach.
		</p>

		<div class="mt-10 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-primary/[0.02] px-1">
			{#each items as { id, question, answer }}
				<div class="font-sans">
					<h3 class="m-0 text-base font-semibold sm:text-lg">
						<button
							type="button"
							id={`${id}-trigger`}
							class="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold text-primary transition hover:bg-primary/[0.03] sm:px-5 sm:py-5"
							aria-expanded={openId === id}
							aria-controls={`${id}-panel`}
							onclick={() => toggle(id)}
						>
							<span class="text-sm leading-snug sm:text-base">{question}</span>
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-background text-primary/70 transition {openId === id
									? 'rotate-180 border-accent/40 text-accent'
									: ''}"
								aria-hidden="true"
							>
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</span>
						</button>
					</h3>
					{#if openId === id}
						<div
							id={`${id}-panel`}
							role="region"
							aria-labelledby={`${id}-trigger`}
							class="border-t border-primary/10 bg-background/80 px-4 pb-4 pt-0 sm:px-5 sm:pb-5"
						>
							<p class="pt-4 text-sm leading-relaxed text-primary/75">{answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
