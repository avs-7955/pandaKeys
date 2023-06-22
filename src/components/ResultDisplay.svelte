<script>
	export let correct
	export let incorrect
	export let time_elapsed
	let accuracy = Math.round((correct / (correct + incorrect)) * 100)
	let wpm = Math.round(((correct + incorrect) / 5 / time_elapsed) * 60)
</script>

<section>
	<!-- Container div -->
	<div class="container mx-auto text-center -mt-8 lg:w-[90%] mb-16">
		<!-- display stats -->
		<div class="flex flex-row justify-around align-middle">
			{#if wpm == 0}
				<div class="text-yellowAccent text-6xl mb-16">
					User was afk!
				</div>
			{:else}
				<!-- wpm count -->
				<div class="flex flex-col mb-2">
					<div class="text-lightGrey text-2xl">wpm</div>
					<div class="text-yellowAccent text-6xl">{wpm}</div>
				</div>
				<!-- accuracy count -->
				<div class="flex flex-col mb-2">
					<div class="text-lightGrey text-2xl">accuracy</div>
					<div class="text-yellowAccent text-6xl">{accuracy}%</div>
				</div>
				<!-- characters count -->
				<!-- accuracy count -->
				<div class="flex flex-col mb-2">
					<div class="text-lightGrey text-2xl">characters</div>
					<div class="text-lightGrey text-sm">correct/incorrect</div>
					<div class="text-yellowAccent text-6xl">
						<span class="text-textColor">{correct}</span>/<span
							class="text-errorColor">{incorrect}</span
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
