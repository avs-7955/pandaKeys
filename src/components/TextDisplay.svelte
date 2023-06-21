<script>
	export let text
	let value = ""
	let inputRef
	let caret_pos_horizontal = 4
	let caret_pos_vertical = 16
	let words = text.split(" ")
	console.log(words)
	// to make sure input field always in focus
	const handleClick = () => {
		inputRef.focus()
	}

	const handleCaret = () => {
		caret_pos_horizontal = 4 + value.length * 15.61
	}
</script>

<section on:click={handleClick} on:keypress={handleClick}>
	<!-- container -->
	<div class="container mx-auto lg:w-[90%] pt-3 overflow-hidden relative">
		<div
			id="caret"
			class="bg-caretColor absolute w-[0.1em] h-8 transition animate-flash"
			style="top:{caret_pos_vertical}px;left:{caret_pos_horizontal}px;"
		/>
		<div
			class="text text-2xl tracking-wider h-44 text-lightGrey select-none flex flex-wrap"
		>
			{#each words as word}
				<div class="word my-[.25em] mx-[7.805px]">
					{#each word as letter}
						<letter>{letter}</letter>
					{/each}
				</div>
			{/each}
		</div>
		<input
			autocapitalize="none"
			autocomplete="off"
			autocorrect="off"
			spellcheck="false"
			tabindex="0"
			bind:value
			bind:this={inputRef}
			autofocus
			class="left-0 top-1 absolute bg-transparent cursor-default pointer-events-none outline-none text-transparent"
			on:input={handleCaret}
		/>
	</div>

	<!-- refresh icon -->
	<div class="flex justify-center mt-3">
		<span
			class=" material-symbols-outlined text-lightGrey mx-auto cursor-pointer"
		>
			refresh
		</span>
	</div>
	{value}
</section>

<!-- top -> 16px - 44px -->
<!-- left -> 04px - 16px -->

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
</style>
