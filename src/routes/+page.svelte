<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import TextTyped from "../components/TextTyped.svelte"
</script>

<Nav />
<div class="relative">
	<div
		class="absolute top-0 left-7 flex flex-none h-[60vh] justify-center items-center"
	>
		<TextDisplay />
	</div>
	<div
		class="absolute -top-[1.1rem] left-7 flex flex-none h-[60vh] justify-center items-center"
	>
		<TextTyped />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: #323437;
		scrollbar-color: #646669 transparent;
		scrollbar-width: thin;
		overflow-y: scroll;
		scroll-behavior: smooth;
	}
</style>
