<script lang="ts">
	const services = [
		{
			title: 'Sama izolacja',
			body: 'Natrysk piany PUR lub wdmuchanie celulozy — dobieramy metodę do konstrukcji i etapu budowy.'
		},
		{
			title: 'Przygotowanie i ocieplenie dachu',
			body: 'Montaż uchwytów, obroba okien dachowych i pełne ocieplenie połaci — kompleksowo w jednym zleceniu.'
		},
		{
			title: 'Zabudowa płytami GK',
			body: 'Zabudowa z ociepleniem do etapu pierwszego malowania — oddajemy gotowe poddasze, nie surowy natrysk.'
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

<section id="o-nas" class="scroll-mt-24 border-b border-primary/10 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="min-w-0">
				<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
					O firmie
				</p>
				<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
					Piana PUR, celuloza i pełne wykończenie — jedna ekipa, jeden kontakt
				</h2>
				<p class="mt-6 font-sans text-base leading-relaxed text-primary/80">
					Od 2016 roku specjalizujemy się w izolacji pianą PUR. Z czasem rozszerzyliśmy ofertę
					o ocieplenia wdmuchiwane celulozą Isocell oraz wełną — dobieramy metodę do konstrukcji
					i potrzeb inwestycji.
				</p>
				<p class="mt-4 font-sans text-base leading-relaxed text-primary/80">
					Pracujemy na profesjonalnym sprzęcie hydraulicznym z własnym zasilaniem.
					Nie jesteśmy uzależnieni od przyłącza na budowie — przyjeżdżamy i działamy.
				</p>
			</div>
			<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
				<img
					src="/images/bus.jpeg"
					alt="Firmowy samochód FHU Marcin Kubik — ocieplenia pianą PUR i wykończenia wnętrz"
					class="w-full rounded-2xl object-cover shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)]"
					style="aspect-ratio: 16/9;"
					loading="lazy"
				/>
			</figure>
		</div>
		<ul class="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
			{#each services as { title, body }, i}
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
	</div>
</section>
