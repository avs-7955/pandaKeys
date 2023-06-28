<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()
	let active_text = 2
	let active_time = 30
	const optionsDispatch = () => {
		dispatch("options", {
			active_text,
			active_time,
		})
	}
</script>

<div
	class="container mx-auto w-[60%] p-3 rounded-md bg-optionsBoxColor text-lightGrey"
>
	<div class="flex flex-col md:flex-row justify-center gap-2 lg:gap-4">
		<div class="flex justify-center gap-4">
			<button
				class={active_text == 1
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_text = 1
					optionsDispatch()
				}}
				><i class="fa-regular fa-at mr-1 text-sm" />punctuation</button
			>
			<button
				class={active_text == 2
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_text = 2
					optionsDispatch()
				}}><i class="fa-solid fa-font mr-1 text-sm" />text</button
			>
			<button
				class={active_text == 3
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_text = 3
					optionsDispatch()
				}}
				><i class="fa-solid fa-quote-left mr-1 text-sm" />quote</button
			>
		</div>
		<div class="hidden md:flex bg-lightGrey rounded-full w-[0.3em]" />
		<div class="flex justify-center gap-4">
			<span> <i class="fa-solid fa-clock text-sm mr-1" />time</span>

			<button
				class={active_time == 15
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_time = 15
					optionsDispatch()
				}}>15</button
			>
			<button
				class={active_time == 30
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_time = 30
					optionsDispatch()
				}}>30</button
			>
			<button
				class={active_time == 60
					? "text-yellowAccent "
					: "hover:text-yellowAccent"}
				on:click={() => {
					active_time = 60
					optionsDispatch()
				}}>60</button
			>
		</div>
	</div>
</div>

<style>
</style>
