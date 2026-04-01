<script lang="ts">
	import { MapPin } from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let success = $state(false);

	const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'Podaj imię i nazwisko.';
		if (!email.trim()) next.email = 'Podaj adres e-mail.';
		else if (!emailOk(email)) next.email = 'Podaj poprawny adres e-mail.';
		if (!message.trim()) next.message = 'Napisz kilka słów o inwestycji.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;
		success = true;
	}

	function sendAnother() {
		success = false;
		name = '';
		email = '';
		message = '';
		errors = {};
	}
</script>

<section id="contact" class="scroll-mt-24 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="min-w-0">
				<h2 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">Kontakt</h2>
				<p class="mt-4 font-sans text-primary/75">
					Opisz inwestycję (powierzchnia, lokalizacja, etap budowy) — przygotujemy zestawienie i terminy.
				</p>
				<ul class="mt-6 space-y-4 font-sans text-sm leading-relaxed text-primary/80">
					<li class="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
						<p class="font-semibold text-primary">Darmowa wycena i dojazd do klienta</p>
						<p class="mt-1 text-primary/70">Bez ukrytych opłat za pierwsze oględziny i wstępną konsultację.</p>
					</li>
					<li class="rounded-xl border border-primary/10 px-4 py-3">
						<p class="font-semibold text-primary">Obszar działania</p>
						<p class="mt-1 text-primary/70">
							Województwa:
							<strong class="font-medium text-primary">śląskie</strong>,
							<strong class="font-medium text-primary">opolskie</strong> i
							<strong class="font-medium text-primary">małopolskie</strong>.
						</p>
					</li>
				</ul>

				<p class="mt-8 font-sans text-sm leading-relaxed text-primary/70">
					Zaufaj lokalnemu specjaliście – setki zadowolonych klientów w regionie.
				</p>

				<div
					class="relative mt-6 flex aspect-video w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 px-4 text-center shadow-[0_8px_28px_-14px_rgba(15,23,42,0.12)]"
					role="img"
					aria-label="Miejsce na mapę Google z lokalizacją firmy"
				>
					<MapPin class="h-10 w-10 shrink-0 text-slate-400 sm:h-12 sm:w-12" strokeWidth={1.35} aria-hidden="true" />
					<p class="font-sans text-sm font-semibold text-slate-500">Mapa Google</p>
					<p class="max-w-xs font-sans text-xs leading-relaxed text-slate-400">
						Tu wkleisz embed (iframe) z Google Maps lub link do wizytówki — ten blok stylistycznie pasuje do
						pozostałych placeholderów mediów.
					</p>
				</div>
			</div>

			<div class="min-w-0">
				{#if success}
					<div
						class="rounded-2xl border border-emerald-600/25 bg-emerald-50/80 p-8 font-sans shadow-sm sm:p-10"
						role="status"
						aria-live="polite"
					>
						<p class="text-lg font-semibold text-primary">Dziękujemy, wiadomość wysłana!</p>
						<p class="mt-3 text-sm leading-relaxed text-primary/75">
							Odezwiemy się po zapoznaniu się z treścią zapytania. Jeśli pilniejsza sprawa — zadzwoń lub
							dopisz drugą wiadomość poniżej.
						</p>
						<button
							type="button"
							class="mt-6 rounded-full border-2 border-primary/15 bg-background px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
							onclick={sendAnother}
						>
							Wyślij kolejną wiadomość
						</button>
					</div>
				{:else}
					<form
						class="flex flex-col gap-4 rounded-2xl border border-primary/10 bg-primary/[0.02] p-6 font-sans sm:p-8"
						onsubmit={handleSubmit}
						novalidate
					>
						<div>
							<label class="block text-sm font-medium text-primary" for="contact-name">
								Imię i nazwisko <span class="text-accent" aria-hidden="true">*</span>
							</label>
							<input
								id="contact-name"
								name="name"
								type="text"
								autocomplete="name"
								bind:value={name}
								aria-invalid={errors.name ? 'true' : undefined}
								aria-describedby={errors.name ? 'err-name' : undefined}
								class="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-primary outline-none ring-accent/40 focus:ring-2 {errors.name
									? 'border-red-500/70'
									: 'border-primary/15'}"
							/>
							{#if errors.name}
								<p id="err-name" class="mt-1 text-xs text-red-600">{errors.name}</p>
							{/if}
						</div>
						<div>
							<label class="block text-sm font-medium text-primary" for="contact-email">
								E-mail <span class="text-accent" aria-hidden="true">*</span>
							</label>
							<input
								id="contact-email"
								name="email"
								type="email"
								autocomplete="email"
								bind:value={email}
								aria-invalid={errors.email ? 'true' : undefined}
								aria-describedby={errors.email ? 'err-email' : undefined}
								class="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-primary outline-none ring-accent/40 focus:ring-2 {errors.email
									? 'border-red-500/70'
									: 'border-primary/15'}"
							/>
							{#if errors.email}
								<p id="err-email" class="mt-1 text-xs text-red-600">{errors.email}</p>
							{/if}
						</div>
						<div>
							<label class="block text-sm font-medium text-primary" for="contact-message">
								Wiadomość <span class="text-accent" aria-hidden="true">*</span>
							</label>
							<textarea
								id="contact-message"
								name="message"
								rows="4"
								bind:value={message}
								aria-invalid={errors.message ? 'true' : undefined}
								aria-describedby={errors.message ? 'err-message' : undefined}
								class="mt-1 w-full resize-y rounded-lg border bg-background px-3 py-2 text-primary outline-none ring-accent/40 focus:ring-2 {errors.message
									? 'border-red-500/70'
									: 'border-primary/15'}"
							></textarea>
							{#if errors.message}
								<p id="err-message" class="mt-1 text-xs text-red-600">{errors.message}</p>
							{/if}
						</div>
						<p class="text-xs text-primary/55"><span class="text-accent">*</span> Pola wymagane</p>
						<button
							type="submit"
							class="mt-1 rounded-full bg-accent py-3 text-sm font-semibold text-primary transition hover:brightness-110"
						>
							Wyślij zapytanie
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
