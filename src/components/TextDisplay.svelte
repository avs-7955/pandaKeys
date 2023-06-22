<script>
	export let text
	let value = ""
	let inputRef, input_words
	let text_container
	let caret_pos_horizontal = 0
	let caret_pos_vertical = 16
	let words = text.split("")
	// to make sure input field always in focus
	const handleClick = () => {
		inputRef.focus()
	}

	const handleCaret = () => {
		// input_words = value.split(" ")
		// console.log(input_words)
		let letters_in_one_line = text_container.clientWidth / 15.62 - 1
		let caret_pos = value.length
		caret_pos_horizontal =
			Math.floor(caret_pos % letters_in_one_line) * 15.6
		caret_pos_vertical =
			16 + Math.floor(caret_pos / letters_in_one_line) * 44
	}
	// const handleCaret = () => {}
</script>

<section on:click={handleClick} on:keypress={handleClick}>
	<!-- container -->
	<div class="container mx-auto w-[90%] pt-3 overflow-hidden relative">
		<div
			id="caret"
			class="bg-caretColor absolute w-[0.15em] h-8 transition animate-flash"
			style="top:{caret_pos_vertical}px;left:{caret_pos_horizontal}px;"
		/>
		<div
			class="text text-2xl tracking-wider h-44 text-lightGrey select-none flex flex-wrap text-justify"
			bind:this={text_container}
		>
			{#if value.length == 0}
				{#each words as letter}
					<!-- <div class="word my-[.25em] mx-[7.805px]"> -->
					<!-- {#each word as letter} -->
					{#if letter == " "}
						<letter class="my-[.25em]">&nbsp</letter>
					{:else}
						<letter class="my-[.25em]">{letter}</letter>
					{/if}
					<!-- {/each} -->
					<!-- </div> -->
				{/each}
			{:else}
				{#each words as letter, index}
					{#if letter == " "}
						<letter class="my-[.25em]">&nbsp</letter>
					{:else if value.length > index && value[index] == letter}
						<letter class="correct my-[.25em]">{letter}</letter>
					{:else if value.length > index && value[index] != letter}
						<letter class="error my-[.25em]">{letter}</letter>
					{:else}
						<letter class="my-[.25em]">{letter}</letter>
					{/if}
				{/each}
			{/if}
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
			class=" material-symbols-outlined text-lightGrey mx-auto cursor-pointer hover:text-textColor"
		>
			refresh
		</span>
	</div>
</section>

<!-- {:else}
				{#each words as word, w_index}
					<div class="word my-[.25em] mx-[7.805px]">
						{#each word as letter, l_index}
							{#if input_words.length >= w_index && l_index < value[w_index].length - 1 && value[w_index][l_index] == letter}
								<letter class="correct">{letter}</letter>
							{:else if input_words.length >= w_index && value[w_index][l_index] != letter}
								<letter class="error">{letter}</letter>
							{:else}
								<letter>{letter}</letter>
							{/if}
						{/each}
					</div>
				{/each} -->

<!-- top -> 16px - 44px -->
<!-- left -> 04px - 16px -->

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
	.correct {
		color: #d1d0c5;
	}
	.error {
		color: #ca4754;
	}
</style>
