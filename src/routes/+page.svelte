<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import TextTyped from "../components/TextTyped.svelte"
	const text =
		"There are two main categories of monkeys, new world monkeys, and old world monkeys. The new world monkeys are found in the regions of South America and North America, whereas the old world monkeys are found in the Asian countries and the African region.Most of the monkeys are mostly found sleeping while sitting on the trees, balancing on a single branch and resting their bottoms upright on the branch. According to research, the sleepiest species of monkey can sleep for 15-17 hours. The difference between the new world monkey and the old world monkey is that the nose of the new world monkey has a round shape, whereas the nose of the old world monkey has a small curve."
</script>

<Nav />
<div class="relative">
	<div
		class="absolute top-0 left-7 flex flex-none h-[60vh] justify-center items-center"
	>
		<TextDisplay {text} />
	</div>
	<!-- <div
		class="absolute -top-[1.1rem] left-7 flex flex-none h-[60vh] justify-center items-center w-[94.5%]"
	>
		<TextTyped {text} />
	</div> -->
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
