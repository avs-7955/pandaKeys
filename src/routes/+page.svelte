<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import Footer from "../components/Footer.svelte"
	import ResultDisplay from "../components/ResultDisplay.svelte"
	const text =
		"but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think"
	let timer = 30 // seconds
	let correct = 0
	let incorrect = 0
	let time_elapsed = 0
	function handleResults(event) {
		correct = event.detail.correct
		incorrect = event.detail.incorrect
		time_elapsed = event.detail.time_elapsed
		console.log(`${correct}   ${incorrect} ${time_elapsed}`)
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
	<ResultDisplay {correct} {incorrect} {time_elapsed} />
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
