<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Polityka prywatności — FHU Marcin Kubik</title>
	<meta name="description" content="Polityka prywatności serwisu pianapur.com" />
	<meta name="robots" content="noindex" />
</svelte:head>

<Navbar />

<main class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 font-sans text-primary">

	<h1 class="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-10">
		Polityka prywatności
	</h1>

	<section class="mb-10">
		<h2 class="font-display text-xl font-bold text-primary mb-4">1. Administrator danych osobowych</h2>
		<p class="text-primary/80 leading-relaxed">
			Administratorem danych osobowych jest <strong class="text-primary">FHU Marcin Kubik – Wykończenia Wnętrz</strong>,
			Traugutta 177, 44-280 Rydułtowy, woj. śląskie, NIP: 6472393062.
		</p>
		<p class="mt-3 text-primary/80 leading-relaxed">
			Kontakt w sprawach związanych z ochroną danych osobowych:
			<a href="mailto:fhu.marcinkubik@gmail.com" class="text-accent hover:underline underline-offset-2">fhu.marcinkubik@gmail.com</a>,
			tel. <a href="tel:667488358" class="text-accent hover:underline underline-offset-2">667 488 358</a>.
		</p>
	</section>

	<section class="mb-10">
		<h2 class="font-display text-xl font-bold text-primary mb-4">2. Jakie dane zbieramy i w jakim celu</h2>
		<div class="space-y-4">
			<div class="rounded-xl border border-primary/10 bg-primary/[0.02] p-5">
				<p class="font-semibold text-primary mb-1">Formularz kontaktowy</p>
				<p class="text-sm text-primary/70 leading-relaxed">
					Dane podane w formularzu (imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości) są przekazywane
					bezpośrednio przez aplikację WhatsApp i nie są przechowywane na serwerach serwisu. Podstawa prawna: art. 6
					ust. 1 lit. b RODO (podjęcie działań na żądanie osoby, której dane dotyczą).
				</p>
			</div>
			<div class="rounded-xl border border-primary/10 bg-primary/[0.02] p-5">
				<p class="font-semibold text-primary mb-1">Analityka serwisu (Vercel Analytics)</p>
				<p class="text-sm text-primary/70 leading-relaxed">
					Serwis korzysta z narzędzia Vercel Analytics, które zbiera anonimowe dane o ruchu na stronie
					(typ urządzenia, przeglądarka, kraj pochodzenia, odwiedzane podstrony). Dane nie zawierają
					informacji umożliwiających identyfikację osoby. Podstawa prawna: art. 6 ust. 1 lit. f RODO
					(prawnie uzasadniony interes administratora — analiza ruchu w celu poprawy jakości serwisu).
				</p>
			</div>
			<div class="rounded-xl border border-primary/10 bg-primary/[0.02] p-5">
				<p class="font-semibold text-primary mb-1">Mapa Google (Google Maps)</p>
				<p class="text-sm text-primary/70 leading-relaxed">
					Serwis osadza mapę Google Maps dostarczaną przez Google LLC. Podczas ładowania mapy Google może
					zbierać dane zgodnie z własną polityką prywatności dostępną na stronie
					<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline underline-offset-2">policies.google.com/privacy</a>.
				</p>
			</div>
		</div>
	</section>

	<section class="mb-10">
		<h2 class="font-display text-xl font-bold text-primary mb-4">3. Prawa osoby, której dane dotyczą</h2>
		<p class="text-primary/80 leading-relaxed">
			Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
			przenoszenia oraz wniesienia sprzeciwu. W celu realizacji praw skontaktuj się z administratorem
			pod adresem <a href="mailto:fhu.marcinkubik@gmail.com" class="text-accent hover:underline underline-offset-2">fhu.marcinkubik@gmail.com</a>.
			Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).
		</p>
	</section>

	<section class="mb-10">
		<h2 class="font-display text-xl font-bold text-primary mb-4">4. Pliki cookie</h2>
		<p class="text-primary/80 leading-relaxed">
			Serwis może wykorzystywać pliki cookie niezbędne do prawidłowego działania strony. Nie stosujemy
			plików cookie do celów marketingowych ani śledzenia użytkowników między serwisami.
		</p>
	</section>

	<section class="mb-10">
		<h2 class="font-display text-xl font-bold text-primary mb-4">5. Zmiany polityki prywatności</h2>
		<p class="text-primary/80 leading-relaxed">
			Administrator zastrzega sobie prawo do zmiany niniejszej polityki prywatności. Aktualna wersja
			jest zawsze dostępna pod adresem
			<a href="https://www.pianapur.com/polityka-prywatnosci" class="text-accent hover:underline underline-offset-2">pianapur.com/polityka-prywatnosci</a>.
		</p>
		<p class="mt-3 text-sm text-primary/60">Ostatnia aktualizacja: kwiecień 2026</p>
	</section>

</main>

<footer class="border-t border-primary/10 bg-primary text-background">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
		<p class="font-sans text-sm text-background/60 text-center">
			© {new Date().getFullYear()} FHU Marcin Kubik. 
			<a href="/" class="text-accent underline-offset-2 hover:underline ml-2">Wróć na stronę główną</a>
		</p>
	</div>
</footer>
