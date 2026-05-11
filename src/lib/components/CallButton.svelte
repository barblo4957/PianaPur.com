<a
	href="tel:667488358"
	class="call-fab"
	aria-label="Zadzwoń do nas"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="24"
		height="24"
		aria-hidden="true"
	>
		<path
			d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"
		/>
	</svg>
</a>

<style>
	.call-fab {
		display: none;
		position: fixed;
		bottom: 24px;
		right: 24px;
		z-index: 100;
		background: #e8a020;
		color: #1a1a2e;
		border-radius: 999px;
		width: 60px;
		height: 60px;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.call-fab:hover {
		transform: scale(1.08);
		box-shadow: 0 6px 24px rgba(232, 160, 32, 0.45);
	}

	@media (max-width: 1023px) {
		.call-fab {
			display: flex;
		}
	}
</style>
