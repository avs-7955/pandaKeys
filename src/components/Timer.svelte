<script>
	export let timer

	import { readable } from "svelte/store"
	import { tweened } from "svelte/motion"
	import { onMount } from "svelte"
	const mstime = readable(new Date().getTime(), (set) => {
		let animationFrame
		const next = () => {
			set(new Date().getTime())
			animationFrame = requestAnimationFrame(next)
		}
		if (window.requestAnimationFrame) {
			next()
			return () => cancelAnimationFrame(animationFrame)
		}
	})

	let start
	const handleClick = () => {
		start = new Date().getTime()
	}

	$: time = Math.floor(($mstime - start) / 1000)
	$: toWait = timer - time > 0 ? timer - time : 0
	$: minutes = Math.floor(toWait / 60)
	$: seconds = toWait - minutes * 60
</script>

<section>
	<button on:click={handleClick}>Click me</button>
	<div class="timer-value">
		{#if seconds > 9}
			<span>{minutes}:{seconds}</span>
		{:else}
			<span>{minutes}:0{seconds}</span>
		{/if}
	</div>
</section>
