<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()
	export let text
	export let timer
	let value = ""
	let begin = false
	let inputRef,
		correct = 0,
		incorrect = 0
	let minutes = 0,
		seconds = 0
	let text_container
	let screen_text = 0
	let caret_pos_horizontal = 0
	let caret_pos_vertical = 16
	let words = text.split("")

	// to make sure input field always in focus
	const handleClick = () => {
		inputRef.focus()
	}

	const handleCaret = () => {
		if (begin == false) {
			begin = true
			handleTimer()
		}
		let letters_in_one_line = text_container.clientWidth / 15.62 - 1
		screen_text = Math.ceil(letters_in_one_line * 4)
		// console.log(screen_text)
		let caret_pos = value.length
		caret_pos_horizontal =
			Math.floor(caret_pos % letters_in_one_line) * 15.6
		caret_pos_vertical =
			16 + Math.floor(caret_pos / letters_in_one_line) * 44

		// for end result
		if (value.length == screen_text) {
			for (let i = 0; i < value.length; i++) {
				if (text[i] == value[i]) correct += 1
				else incorrect += 1
			}
			dispatch("results", {
				correct: correct,
				incorrect: incorrect,
			})
			// console.log("Correct" + correct)
			// console.log("Incorrect" + incorrect)
		}
	}

	// for timer
	const handleTimer = () => {
		console.log("I have started")
	}
</script>

<section on:click={handleClick} on:keypress={handleClick}>
	<!-- timer container -->
	<div class="container mx-auto w-[90%] pt-3">
		<div class="timer-value text-2xl text-yellowAccent">
			{#if begin == true}
				{#if seconds > 9}
					<span>{minutes}:{seconds}</span>
				{:else}
					<span>{minutes}:0{seconds}</span>
				{/if}
			{:else if timer == 30}
				<span>0:{timer}</span>
			{/if}
		</div>
	</div>
	<!-- text container -->
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
					{#if letter == " "}
						<letter class="my-[.25em]">&nbsp</letter>
					{:else}
						<letter class="my-[.25em]">{letter}</letter>
					{/if}
				{/each}
			{:else}
				{#each words as letter, index}
					{#if letter == " "}
						<letter class="my-[.25em]">&nbsp</letter>
					{:else if value.length > index}
						<letter
							class={value[index] == letter
								? "my-[.25em] text-textColor"
								: "my-[.25em] text-errorColor"}>{letter}</letter
						>
					{:else}
						<letter class="my-[.25em]">{letter}</letter>
					{/if}
				{/each}
			{/if}
		</div>
		<!-- svelte-ignore a11y-autofocus -->
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

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
</style>
