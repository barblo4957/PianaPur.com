<script lang="ts">
	import { Construction, Image, Leaf } from 'lucide-svelte';

	type Variant = 'hero' | 'open' | 'closed' | 'eco';

	let {
		variant = 'hero',
		ariaLabel = 'Miejsce na zdjęcie — materiał zostanie dodany wkrótce',
		extraClass = ''
	}: {
		variant?: Variant;
		ariaLabel?: string;
		extraClass?: string;
	} = $props();

	const copy: Record<
		Variant,
		{ title: string; hint: string }
	> = {
		hero: {
			title: 'Zdjęcie projektu',
			hint: 'Realizacja wkrótce · dopasowane pod 16:9'
		},
		open: {
			title: 'Zdjęcie projektu',
			hint: 'Otwartokomórkowa · realizacja wkrótce'
		},
		closed: {
			title: 'Zdjęcie projektu',
			hint: 'Zamkniętokomórkowa · realizacja wkrótce'
		},
		eco: {
			title: 'Zdjęcie projektu',
			hint: 'Celuloza · realizacja wkrótce'
		}
	};

	const iconClass = 'h-11 w-11 shrink-0 text-slate-400 sm:h-12 sm:w-12';
	const stroke = 1.35;
</script>

<!--
	MediaPlaceholder — photo tips for the client / photographer:
	- hero: Wide shot of the crew spraying PUR on a pitched or flat roof; include hose, PPE, and fresh foam on the substrate (e.g. OSB or membrane).
	- open: Close-up or mid-shot of open-cell foam texture after application — emphasise lightness and cell structure on attic / wall.
	- closed: Close-up of tight closed-cell foam on foundation, floor slab, or basement wall — show density and moisture-barrier context if possible.
	- eco: Cellulose blowing machine, hose into floor cavity, or settled blown-in in an attic — communicates wdmuchiwanie and ecological insulation.
-->
<div
	class="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-slate-200/90 bg-slate-100 px-6 text-center shadow-[0_8px_28px_-14px_rgba(15,23,42,0.12)] {extraClass}"
	role="img"
	aria-label={ariaLabel}
>
	{#if variant === 'hero'}
		<!-- hero: wide roof / natrysk scena -->
		<Image class={iconClass} strokeWidth={stroke} aria-hidden="true" />
	{:else if variant === 'eco'}
		<!-- eco: celuloza, wdmuchiwanie, strop / poddasze -->
		<Leaf class={iconClass} strokeWidth={stroke} aria-hidden="true" />
	{:else}
		<!-- open | closed: struktura piany / detal budowlany -->
		<Construction class={iconClass} strokeWidth={stroke} aria-hidden="true" />
	{/if}
	<div class="font-sans">
		<p class="text-sm font-semibold text-slate-500">{copy[variant].title}</p>
		<p class="mt-1 text-xs leading-relaxed text-slate-400">{copy[variant].hint}</p>
	</div>
</div>
