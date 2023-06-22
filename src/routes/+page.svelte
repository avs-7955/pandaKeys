<script>
	import Nav from "../components/Nav.svelte"
	import TextDisplay from "../components/TextDisplay.svelte"
	import Footer from "../components/Footer.svelte"
	import TextTyped from "../components/TextTyped.svelte"
	const text =
		"but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think but place point again line general have tell show write there late even again tell both never stand from without might world word home here any where very all in without see same all much large come about think"
</script>

<Nav />
<div class="flex flex-none h-[60vh] justify-center items-center">
	<TextDisplay {text} />
</div>
<!-- <div
		class="absolute -top-[1.1rem] left-7 flex flex-none h-[60vh] justify-center items-center w-[94.5%]"
	>
		<TextTyped {text} />
	</div> -->

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
