<script lang="ts">
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let errors = $state<Record<string, string>>({});

	const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'Podaj imię i nazwisko.';
		if (!email.trim()) next.email = 'Podaj adres e-mail.';
		else if (!emailOk(email)) next.email = 'Podaj poprawny adres e-mail.';
		if (!phone.trim()) next.phone = 'Podaj numer telefonu.';
		if (!message.trim()) next.message = 'Napisz kilka słów o inwestycji.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;

		const text = `🏠 Nowe zapytanie ze strony pianapur.com

👤 Imię i nazwisko: ${name}
📧 E-mail: ${email}
📞 Telefon: ${phone}
📝 Wiadomość: ${message}`;

		const url = `https://wa.me/48667488358?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
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

				<div class="relative mt-6 overflow-hidden rounded-xl border border-slate-200/90 shadow-[0_8px_28px_-14px_rgba(15,23,42,0.12)]">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5123.484713680979!2d18.400168119883453!3d50.05365753560116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471145306329b9f5%3A0x9ad6110fc2a4ecc9!2sFHU%20Marcin%20Kubik%20Ocieplenia%20dach%C3%B3w%20pian%C4%85%2C%20Metod%C4%85%20wdmuchiwania%2C%20Wyko%C5%84czenia%20Wn%C4%99trz!5e0!3m2!1spl!2spl!4v1776798854962!5m2!1spl!2spl"
						width="100%"
						height="300"
						style="border:0; display:block;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Lokalizacja FHU Marcin Kubik"
					></iframe>
				</div>
			</div>

			<div class="min-w-0">
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
						<label class="block text-sm font-medium text-primary" for="contact-phone">
							Telefon <span class="text-accent" aria-hidden="true">*</span>
						</label>
						<input
							id="contact-phone"
							name="phone"
							type="tel"
							autocomplete="tel"
							bind:value={phone}
							aria-invalid={errors.phone ? 'true' : undefined}
							aria-describedby={errors.phone ? 'err-phone' : undefined}
							class="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-primary outline-none ring-accent/40 focus:ring-2 {errors.phone
								? 'border-red-500/70'
								: 'border-primary/15'}"
						/>
						{#if errors.phone}
							<p id="err-phone" class="mt-1 text-xs text-red-600">{errors.phone}</p>
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
						Wyślij zapytanie przez WhatsApp
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
