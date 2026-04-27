<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import VideoSection from '$lib/components/VideoSection.svelte';
	import Features from '$lib/components/Features.svelte';
	import Comparison from '$lib/components/Comparison.svelte';
	import Cellulose from '$lib/components/Cellulose.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<Navbar />
<main>
	<Hero />
	<About />
	<VideoSection />
	<Features />
	<Comparison />
	<Cellulose />
	<FAQ />
	<Contact />
</main>
<footer class="border-t border-primary/10 bg-primary text-background">
	<div class="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
			<div>
				<p class="font-display text-xl font-bold tracking-tight sm:text-2xl">FHU Marcin Kubik</p>
				<p class="mt-4 max-w-sm font-sans text-sm leading-relaxed text-background/70">
					Piana PUR i ocieplanie celulozą. Wycena i dojazd do klienta na terenie województw:
					<strong class="font-medium text-background/85">śląskiego</strong>,
					<strong class="font-medium text-background/85">opolskiego</strong> i
					<strong class="font-medium text-background/85">małopolskiego</strong>.
				</p>
			</div>
			<div class="font-sans text-sm text-background/65">
				<p class="font-semibold text-background/90">Na stronie</p>
				<ul class="mt-2 space-y-1">
					<li>
						<a class="text-accent underline-offset-2 hover:underline" href="#faq">Najczęstsze pytania</a>
					</li>
					<li>
						<a class="text-accent underline-offset-2 hover:underline" href="#contact">Formularz kontaktowy</a>
					</li>
				</ul>
			</div>
			<div class="font-sans text-sm text-background/65">
				<p class="font-semibold text-background/90">Znajdź nas</p>
				<ul class="mt-2 space-y-1">
					<li>
						<a class="text-accent underline-offset-2 hover:underline" href="https://www.facebook.com/Izolacje.Natryskowe.Marcin.Kubik" target="_blank" rel="noopener noreferrer">Facebook</a>
					</li>
					<li>
						<a class="text-accent underline-offset-2 hover:underline" href="https://www.tiktok.com/@pianapur.com" target="_blank" rel="noopener noreferrer">TikTok</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col gap-2 border-t border-background/15 pt-8 font-sans text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
			<p>© {new Date().getFullYear()} FHU Marcin Kubik. Wszelkie prawa zastrzeżone. <a href="/polityka-prywatnosci" class="underline-offset-2 hover:text-accent hover:underline">Polityka prywatności</a></p>
			<p>
				Zaprojektowane przez
				<a
					class="text-background/85 underline-offset-2 transition-colors hover:text-accent hover:underline"
					href="https://siteconcept.pl"
					target="_blank"
					rel="noopener noreferrer">Siteconcept.pl</a>.
			</p>
		</div>
	</div>
</footer>
