<script lang="ts">
	import MediaPlaceholder from '$lib/components/MediaPlaceholder.svelte';
</script>

<section id="comparison" class="scroll-mt-24 border-b border-primary/10 bg-primary/[0.02] py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
			Piana otwarto- vs zamkniętokomórkowa
		</h2>
		<p class="mt-4 max-w-2xl font-sans text-primary/75">
			Dwa systemy PUR — ten sam materiał bazowy, inne komórki piany i inne zastosowania konstrukcyjne.
		</p>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			<article
				class="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-sm sm:p-8"
				aria-labelledby="open-cell-title"
			>
				<div class="mb-6 w-full">
					<!-- MediaPlaceholder open: zbliżenie na fakturę / strukturę piany otwartokomórkowej na poddaszu lub ścianie -->
					<MediaPlaceholder
						variant="open"
						ariaLabel="Miejsce na zdjęcie — realizacja piany otwartokomórkowej"
					/>
				</div>
				<h3 id="open-cell-title" class="font-display text-xl font-bold text-primary sm:text-2xl">
					Piana otwartokomórkowa
				</h3>
				<ul class="mt-4 flex flex-1 flex-col gap-3 font-sans text-sm leading-relaxed text-primary/80">
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span><strong class="text-primary">Poddasza</strong> — skuteczne wypełnienie płatwi i złożonych geometrii.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span><strong class="text-primary">Ściany</strong> — izolacja przegród od wewnątrz lub w strefie środkowej.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span
							><strong class="text-primary">Elastyczna</strong> — pracuje z konstrukcją drewnianą, mniejsze naprężenia w układzie.</span>
					</li>
				</ul>
				<p class="mt-6 border-t border-primary/10 pt-4 font-sans text-xs leading-relaxed text-primary/60">
					Struktura otwartych komórek ułatwia paroprzepuszczalność warstwy w stosunku do systemów całkowicie
					zamkniętych — dobrze zestawia się z wentylacją skraplaczową dachu.
				</p>
			</article>

			<article
				class="flex flex-col rounded-2xl border-2 border-accent/30 bg-background p-6 shadow-sm sm:p-8"
				aria-labelledby="closed-cell-title"
			>
				<div class="mb-6 w-full">
					<!-- MediaPlaceholder closed: zbliżenie na gęstą pianę zamkniętokomórkową — fundament, strop lub piwnica jako kontekst -->
					<MediaPlaceholder
						variant="closed"
						ariaLabel="Miejsce na zdjęcie — realizacja piany zamkniętokomórkowej"
					/>
				</div>
				<h3 id="closed-cell-title" class="font-display text-xl font-bold text-primary sm:text-2xl">
					Piana zamkniętokomórkowa
				</h3>
				<ul class="mt-4 flex flex-1 flex-col gap-3 font-sans text-sm leading-relaxed text-primary/80">
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span><strong class="text-primary">Fundamenty i piwnice</strong> — kontakt z gruntem i wilgocią kapilarną.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span><strong class="text-primary">Stropy</strong> — sztywniejsza warstwa, wyższa nośność na ścisk przy ograniczonej grubości.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span
							><strong class="text-primary">Bariera dla wilgoci</strong> — zamknięte komórki ograniczają przenikanie pary i wody w
							płynie.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
						<span><strong class="text-primary">Odporność mechaniczna</strong> — odporna na uszkodzenia mechaniczne i obciążenia.</span>
					</li>
				</ul>
				<p class="mt-6 border-t border-primary/10 pt-4 font-sans text-xs leading-relaxed text-primary/60">
					Wybór grubości i warstwy kontaktowej z gruntem zawsze potwierdzamy projektem i WT obiektu.
				</p>
			</article>
		</div>

		<div class="mt-10 overflow-x-auto rounded-2xl border border-primary/10 bg-background shadow-sm">
			<table class="w-full min-w-[36rem] text-left font-sans text-sm">
				<caption class="sr-only">Porównanie piany otwarto- i zamkniętokomórkowej</caption>
				<thead>
					<tr class="border-b border-primary/10 bg-primary text-left text-background">
						<th class="px-4 py-3 font-semibold sm:px-6">Aspekt</th>
						<th class="px-4 py-3 font-semibold sm:px-6">Otwartokomórkowa</th>
						<th class="px-4 py-3 font-semibold sm:px-6">Zamkniętokomórkowa</th>
					</tr>
				</thead>
				<tbody class="text-primary/85">
					<tr class="border-b border-primary/10">
						<td class="px-4 py-3 font-medium text-primary sm:px-6">Główne strefy</td>
						<td class="px-4 py-3 sm:px-6">Poddasza, ściany (lekkie, elastyczne układy)</td>
						<td class="px-4 py-3 sm:px-6">Fundamenty, stropy, piwnice</td>
					</tr>
					<tr class="border-b border-primary/10">
						<td class="px-4 py-3 font-medium text-primary sm:px-6">Wilgoć / para</td>
						<td class="px-4 py-3 sm:px-6">Bardziej „oddychający” profil warstwy (otwarte komórki)</td>
						<td class="px-4 py-3 sm:px-6">Silniejsza bariera — ogranicza przenikanie wilgoci</td>
					</tr>
					<tr class="border-b border-primary/10">
						<td class="px-4 py-3 font-medium text-primary sm:px-6">Mechanika</td>
						<td class="px-4 py-3 sm:px-6">Elastyczność, dopasowanie do ruchów drewna</td>
						<td class="px-4 py-3 sm:px-6">Wyższa sztywność i odporność na uszkodzenia</td>
					</tr>
					<tr>
						<td class="px-4 py-3 font-medium text-primary sm:px-6">Typowy wybór gdy…</td>
						<td class="px-4 py-3 sm:px-6">Chcesz szczelną izolację płatwi i przegród „suchych”</td>
						<td class="px-4 py-3 sm:px-6">Potrzebujesz bariery w kontakcie z ziemią lub wilgocią</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>
