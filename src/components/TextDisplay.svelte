<script>
	export let text
	let value = ""
	let inputRef
	let words = text.split(" ")
	console.log(words)
	const handleClick = () => {
		inputRef.focus()
	}
</script>

<section on:click={handleClick} on:keypress={handleClick}>
	<!-- container -->
	<div class="container mx-auto lg:w-[90%] pt-3 overflow-hidden relative">
		<div
			id="caret"
			class="bg-caretColor absolute top-[16px] left-[4px] w-[0.1em] h-8 transition animate-flash"
		/>
		<div
			class="text text-2xl tracking-wider h-44 text-lightGrey select-none flex flex-wrap"
		>
			{#each words as word}
				<div class="word m-[.25em]">
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
