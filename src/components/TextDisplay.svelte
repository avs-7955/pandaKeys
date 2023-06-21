<script>
	export let text
</script>

<section>
	<!-- container -->
	<div class="container mx-auto lg:w-[90%] pt-3 overflow-hidden relative">
		<div
			id="caret"
			class="bg-caretColor absolute top-1.2 left-0 w-[0.1em] h-8 transition animate-flash"
		/>
		<div
			class="text text-2xl tracking-wider h-48 text-lightGrey select-none"
		>
			{text}
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

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
	/* #caret {
		transition: ease 1s infinite;
	} */
</style>
