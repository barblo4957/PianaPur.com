<script lang="ts">
	import MediaPlaceholder from '$lib/components/MediaPlaceholder.svelte';
</script>

<section
	id="celuloza"
	class="scroll-mt-24 border-y border-slate-200/90 bg-slate-50 py-20 sm:py-24"
	aria-labelledby="cellulose-heading"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
			<div class="min-w-0 lg:max-w-xl">
				<p class="font-sans text-sm font-semibold uppercase tracking-wider text-emerald-800">
					Oferta ekologiczna
				</p>
				<h2 id="cellulose-heading" class="mt-2 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
					Ocieplanie celulozą
				</h2>
				<p class="mt-4 font-sans text-primary/75">
					Celuloza to <strong class="font-semibold text-primary">ekologiczna alternatywa</strong> dla ociepleń
					techniką wdmuchiwania — materiał z recyclingu papieru, impregnowany solami przeciwpożarowymi i
					proszkami antygrzybicznymi (zgodnie z kartą produktu i deklaracją właściwości użytkowych).
				</p>
				<p class="mt-4 rounded-xl border border-emerald-700/20 bg-white px-4 py-3 font-sans text-sm leading-relaxed text-primary/80 shadow-sm">
					<strong class="text-primary">Lokalnie:</strong> ocieplanie celulozą dostępne w
					<strong class="font-semibold text-primary">Raciborzu i regionie</strong> — wycena i terminy jak przy
					natrysku PUR; dobór metody zależy od konstrukcji i WT.
				</p>
			</div>
			<div class="w-full">
				<!-- MediaPlaceholder eco: wdmuchiwarka / wąż w przestrzeń stropu lub ułożona celuloza na poddaszu — nacisk „eko” -->
				<MediaPlaceholder variant="eco" ariaLabel="Miejsce na zdjęcie — ocieplanie celulozą" />
			</div>
		</div>

		<ul class="mt-12 grid gap-4 sm:grid-cols-2">
			<li class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
				<h3 class="font-display text-base font-bold text-primary">Dlaczego ekologia</h3>
				<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">
					Niskoemisyjny sposób wykorzystania surowca wtórnego — dobrze komponuje się z certyfikowanymi
					obiektami i świadomym klimatem inwestorem.
				</p>
			</li>
			<li class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
				<h3 class="font-display text-base font-bold text-primary">Gdzie stosujemy</h3>
				<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">
					Wypełnianie przestrzeni obrysowych, stropy, skosy — tam, gdzie technologia wdmuchania daje pełny
					kontakt z przegrodą i unika mostków termicznych.
				</p>
			</li>
			<li class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:col-span-2">
				<h3 class="font-display text-base font-bold text-primary">PUR czy celuloza?</h3>
				<p class="mt-2 font-sans text-sm leading-relaxed text-primary/70">
					PUR daje natychmiastową szczelność i wysoką izolacyjność przy natrysku; celuloza sprawdza się w
					wielu klasycznych układach suchej zabudowy. Na spotkaniu doradzamy, co ma sens w Twoim dachu lub
					stropie.
				</p>
			</li>
		</ul>
	</div>
</section>
