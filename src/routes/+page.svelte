<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import Footer from "../components/Footer.svelte"
	import ResultDisplay from "../components/ResultDisplay.svelte"
	import Options from "../components/Options.svelte"
	const words =
		"but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think"
	const sentences = `A wild boar was sharpening his tusks busily against the stump of a tree, when a fox happened by. The fox made a great show of looking anxiously about, as if in fear of some hidden enemy. But the boar kept right on with his work. "Why are you doing that?" asked the fox at last with a grin. "There isn't any danger that I can see." "True enough," replied the boar, "but when danger does come there will not be time for such work as this. My weapons will have to be ready for use then, or I shall suffer for it.`
	const quotes = `"You have the power to heal your life, and you need to know that.", "Courage is resistance to fear, mastery of fear - not absence of fear.", "I have waited lifetimes to find you. Now that you're here I can remind you of the things I've been dreaming of times two.", "I am the wisest man alive, for I know one thing, and that is that I know nothing.", `
	let timer = 30 // seconds
	let text = words // text
	let text_opn = 2 // default text
	let correct = 0
	let incorrect = 0
	let time_elapsed = 0
	function handleResults(event) {
		correct = event.detail.correct
		incorrect = event.detail.incorrect
		time_elapsed = event.detail.time_elapsed
		console.log(`${correct}   ${incorrect} ${time_elapsed}`)
	}

	const handleOptions = (event) => {
		text_opn = event.detail.active_text
		timer = event.detail.active_time
		console.log(`${text_opn}   ${timer}`)
	}
</script>

<Nav />
<div class="flex flex-col flex-none h-[60vh] justify-center items-center">
	<Options on:options={handleOptions} />
	{#if text_opn == 1}
		<TextDisplay text={sentences} {timer} on:results={handleResults} />
	{:else if text_opn == 3}
		<TextDisplay text={quotes} {timer} on:results={handleResults} />
	{:else}
		<TextDisplay {text} {timer} on:results={handleResults} />
	{/if}
</div>
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
