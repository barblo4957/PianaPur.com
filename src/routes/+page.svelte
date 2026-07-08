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
	import CallButton from '$lib/components/CallButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
	<CallButton />
</main>
<Footer />
