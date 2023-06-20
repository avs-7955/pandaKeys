<script>
	import Nav from "../components/Nav.svelte"
	import TextArea from "../components/TextArea.svelte"
</script>

<Nav />
<div class="flex flex-none h-[60vh] justify-center items-center">
	<TextArea />
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
