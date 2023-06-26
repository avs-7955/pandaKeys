<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()
	export let text
	export let timer
	let value = ""
	let begin = false,
		blur = false,
		result = false
	let inputRef, start, end, now
	let correct = 0,
		incorrect = 0
	let seconds = timer
	let timer_interval
	let text_container
	let screen_text = 0
	let caret_pos_horizontal = 0
	let caret_pos_vertical = 16
	let words = text.split("")

	// to make sure input field always in focus
	const handleClick = () => {
		blur = false
		inputRef.focus()
	}

	// to handle the blur
	const handleBlur = () => {
		blur = true
		console.log("I have been blurred!")
		value = ""
		// reseting caret
		caret_pos_horizontal = 0
		caret_pos_vertical = 16
		clearInterval(timer_interval)
		seconds = timer
	}

	// to handle the caret position
	const handleCaret = () => {
		if (begin == false) {
			begin = true
			handleTimer()
		}
		let end_text
		if (result != true) {
			let letters_in_one_line = text_container.clientWidth / 15.62 - 1
			screen_text = Math.ceil(letters_in_one_line * 4)
			let caret_pos = value.length
			caret_pos_horizontal =
				Math.floor(caret_pos % letters_in_one_line) * 15.6
			caret_pos_vertical =
				16 + Math.floor(caret_pos / letters_in_one_line) * 44

			// for end result
			if (value.length == screen_text) {
				dispatchResult()
				end_text = value
			}
		} else {
			value = end_text
		}
	}

	// function to find the result and send it to the parent
	const dispatchResult = () => {
		blur = false
		result = true
		for (let i = 0; i < value.length; i++) {
			if (text[i] == value[i]) correct += 1
			else incorrect += 1
		}
		clearInterval(timer_interval)
		end = new Date()
		dispatch("results", {
			correct: correct,
			incorrect: incorrect,
			time_elapsed: (end.getTime() - start.getTime()) / 1000,
		})
		// inputRef.blur()
	}

	const updateTimer = () => {
		// for updating time
		now = new Date()
		seconds = timer - Math.round((now.getTime() - start.getTime()) / 1000)

		// if seconds == 0, calling function to dispatch results
		if (seconds == 0) {
			dispatchResult()
		}
	}
	// for timer
	const handleTimer = () => {
		console.log("I have started")
		start = new Date()
		timer_interval = setInterval(updateTimer, 1000)
	}

	// to handle reset
	const handleReset = () => {
		begin = false
		result = false
		value = ""
		// reseting caret
		caret_pos_horizontal = 0
		caret_pos_vertical = 16
		clearInterval(timer_interval)
		seconds = timer

		// to remove the result if being displayed
		correct = 0
		incorrect = 0
		dispatch("results", {
			correct: correct,
			incorrect: incorrect,
			time_elapsed: (end.getTime() - start.getTime()) / 1000,
		})
	}
</script>

<section
	on:mousedown|preventDefault={handleClick}
	on:keypress={handleClick}
	on:focusout={handleBlur}
>
	<!-- timer container -->
	<div class="container mx-auto w-[90%] pt-3">
		<div class="timer-value text-2xl text-yellowAccent">
			{#if begin == true}
				{#if seconds > 9}
					<span>0:{seconds}</span>
				{:else}
					<span>0:0{seconds}</span>
				{/if}
			{:else if timer == 30}
				<span>0:{timer}</span>
			{/if}
		</div>
	</div>
	<div
		class={blur == false || result == true
			? "hidden"
			: "container mx-auto w-[90%] pt-3 overflow-hidden relative text-textColor text-xl flex justify-center"}
	>
		<span class="material-symbols-outlined text-lg mr-1">
			arrow_selector_tool
		</span>
		Click to start the test!
	</div>
	<!-- text container -->
	<div class="container mx-auto w-[90%] pt-3 overflow-hidden relative">
		<div
			id="caret"
			class="bg-caretColor absolute w-[0.15em] h-8 transition animate-flash"
			style="top:{caret_pos_vertical}px;left:{caret_pos_horizontal}px;"
		/>
		<div
			class={blur == true && result == false
				? "blur-sm text text-2xl tracking-wider h-44 text-lightGrey select-none flex flex-wrap text-justify"
				: "text text-2xl tracking-wider h-44 text-lightGrey select-none flex flex-wrap text-justify"}
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
					{#if value.length > index}
						{#if letter == " "}
							<letter
								class={value[index] == letter
									? "my-[.25em]"
									: "my-[.25em] border-b-2 border-errorColor"}
								>&nbsp</letter
							>
						{/if}
						<letter
							class={value[index] == letter
								? "my-[.25em] text-textColor"
								: "my-[.25em] text-errorColor"}>{letter}</letter
						>
					{:else if letter == " "}
						<letter class="my-[.25em]">&nbsp</letter>
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
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class=" material-symbols-outlined text-lightGrey mx-auto cursor-pointer hover:text-textColor"
			on:click={handleReset}
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
