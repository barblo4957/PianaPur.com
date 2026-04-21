<script lang="ts">
	const stats = [
		{ label: 'Wydajność natrysku', value: 'do 300 m² / dzień' },
		{ label: 'Obszar realizacji', value: '3 województwa' },
		{ label: 'Systemy', value: 'PUR + celuloza' }
	] as const;
</script>

<section
	class="relative overflow-hidden border-b border-primary/10 bg-linear-to-b from-primary/[0.03] to-background"
	aria-labelledby="hero-heading"
>
	<div class="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pt-24">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
			<div class="min-w-0">
				<p class="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-accent">
					Piana poliuretanowa PUR
				</p>
				<h1
					id="hero-heading"
					class="font-display text-3xl font-bold leading-[1.08] tracking-tight text-primary sm:text-4xl lg:text-5xl xl:text-[2.75rem]"
				>
					Najkorzystniejszy sposób na izolację Twojej inwestycji – Piana PUR
				</h1>
				<p class="mt-6 max-w-2xl font-sans text-base leading-relaxed text-primary/80 sm:text-lg">
					Zapewniamy pełną szczelność, oszczędność energii i komfort przez cały rok. Latem chronimy przed
					upałem, zimą przed utratą ciepła.
				</p>
				<div class="mt-10 flex flex-wrap gap-4">
					<a
						href="#contact"
						class="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-primary shadow-md transition hover:brightness-110"
					>
						Darmowa wycena
					</a>
					<a
						href="#features"
						class="inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-6 py-3 font-sans text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
					>
						Korzyści i proces
					</a>
				</div>
			</div>

			<figure class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
				<img
					src="/images/hero.jpeg"
					alt="Ocieplenie pianą PUR — widok z wnętrza poddasza po natrysku"
					class="w-full rounded-2xl object-cover shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)]"
					style="aspect-ratio: 16/9;"
					loading="eager"
				/>
			</figure>
		</div>

		<div
			class="mt-14 grid grid-cols-1 justify-items-center gap-10 border-t border-primary/10 pt-10 sm:grid-cols-3 sm:justify-items-stretch sm:gap-0 sm:pt-12 lg:mt-16"
			aria-label="Kluczowe informacje"
		>
			{#each stats as { label, value }, i}
				<div
					class="flex w-full flex-col items-center gap-1 text-center sm:items-start sm:px-6 sm:text-left lg:px-8 {i > 0
						? 'sm:border-l sm:border-primary/10'
						: ''}"
				>
					<p class="font-display text-2xl font-bold tabular-nums tracking-tight text-primary sm:text-[1.65rem]">
						{value}
					</p>
					<p class="font-sans text-xs font-medium uppercase tracking-wide text-primary/55">{label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
