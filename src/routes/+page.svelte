<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import Footer from "../components/Footer.svelte"
	import ResultDisplay from "../components/ResultDisplay.svelte"
	import Timer from "../components/Timer.svelte"
	import TextTyped from "../components/TextTyped.svelte"
	const text =
		"but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think"
	let timer = 30 // seconds
	let correct = 0
	let incorrect = 0
	function handleResults(event) {
		correct = event.detail.correct
		incorrect = event.detail.incorrect
		console.log(`${correct}   ${incorrect}`)
	}
</script>

<Nav />
<!-- <Timer {timer} /> -->
<div class="flex flex-none h-[60vh] justify-center items-center">
	<TextDisplay {text} {timer} on:results={handleResults} />
</div>
<!-- <div
		class="absolute -top-[1.1rem] left-7 flex flex-none h-[60vh] justify-center items-center w-[94.5%]"
	>
		<TextTyped {text} />
	</div> -->
{#if correct == 0}
	<div class="mb-36" />
{/if}
{#if correct > 0}
	<ResultDisplay {correct} {incorrect} />
{/if}
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: #323437;
		scrollbar-color: #646669 transparent;
		scrollbar-width: thin;
		overflow-y: scroll;
		scroll-behavior: smooth;
	}
</style>
