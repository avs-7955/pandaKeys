<script>
	export let text
	let words = text.split(" ")
	console.log(words)
</script>

<section>
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
	</div>

	<!-- refresh icon -->
	<div class="flex justify-center mt-3">
		<span
			class=" material-symbols-outlined text-lightGrey mx-auto cursor-pointer"
		>
			refresh
		</span>
	</div>
</section>
<!-- top -> 16px - 44px -->
<!-- left -> 04px - 16px -->

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
</style>
