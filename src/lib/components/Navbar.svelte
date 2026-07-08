<script lang="ts">
	const links = [
		{ href: '/o-firmie', label: 'O firmie' },
		{ href: '/#features', label: 'Korzyści' },
		{ href: '/uslugi', label: 'Usługi' },
		{ href: '/kontakt', label: 'Kontakt' },
		{ href: '/realizacje', label: 'Realizacje' }
	] as const;

	let menuOpen = $state(false);
	const menuId = 'mobile-primary-nav';

	function closeMenu() {
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<svelte:window
	onkeydown={(e) => e.key === 'Escape' && closeMenu()}
	onclick={(e) => {
		const t = e.target as Node | null;
		if (!menuOpen || !t) return;
		const header = document.querySelector('[data-site-header]');
		if (header && !header.contains(t)) closeMenu();
	}}
/>

<header
	data-site-header
	class="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur"
>
	<div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
		<a
			href="/"
			class="flex min-w-0 items-center gap-2 font-display text-xl font-bold tracking-tight text-primary sm:gap-3 sm:text-2xl"
		>
			<img
				src="/images/logo.png"
				alt="PianaPur — logo"
				class="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
				width="44"
				height="44"
				loading="eager"
				decoding="async"
			/>
			<span>Piana<span class="text-accent">Pur</span></span>
		</a>

		<nav aria-label="Główne" class="hidden flex-1 justify-center lg:flex">
			<ul class="flex items-center gap-6 xl:gap-8">
				{#each links as { href, label }}
					<li>
						<a
							{href}
							class="font-sans text-sm font-medium text-primary/80 transition-colors hover:text-accent">{label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
			<a
				href="tel:667488358"
				class="nav-cta-glow whitespace-nowrap rounded-full bg-accent px-3 py-2 font-sans text-[0.7rem] font-semibold leading-tight text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_22px_-4px_rgba(245,158,11,0.75)] active:scale-[0.98] sm:px-4 sm:text-sm"
				onclick={closeMenu}
			>
				📞 Zadzwoń
			</a>

			<button
				type="button"
				class="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 text-primary transition hover:border-accent/50 hover:bg-primary/[0.03] lg:hidden"
				aria-expanded={menuOpen}
				aria-controls={menuId}
				aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
				onclick={(e) => {
					e.stopPropagation();
					toggleMenu();
				}}
			>
				<span class="sr-only">{menuOpen ? 'Zamknij' : 'Menu'}</span>
				{#if menuOpen}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div
			id={menuId}
			class="absolute inset-x-0 top-full border-t border-primary/10 bg-background/98 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.45)] backdrop-blur lg:hidden"
			role="dialog"
			aria-modal="true"
			aria-label="Menu nawigacji"
		>
			<nav aria-label="Główne — urządzenia mobilne" class="mx-auto max-w-6xl px-4 py-2 sm:px-6">
				<ul class="flex flex-col text-center">
					{#each links as { href, label }, i}
						<li class={i > 0 ? 'border-t border-primary/[0.06]' : ''}>
							<a
								{href}
								class="block px-2 py-2.5 font-sans text-sm font-medium text-primary/90 transition hover:text-accent"
								onclick={closeMenu}>{label}</a>
						</li>
					{/each}
					<li class="mt-3">
						<a
							href="tel:667488358"
							class="nav-cta-glow block rounded-full bg-accent px-4 py-2.5 text-center font-sans text-sm font-semibold text-primary shadow-sm transition duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_22px_-4px_rgba(245,158,11,0.75)] active:scale-[0.98]"
							onclick={closeMenu}>📞 Zadzwoń — 667 488 358</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>
