<script>
	export let text
	let input
	let inner_html

	function checkText() {
		// Get caret position
		// let c = window.getSelection().getRangeAt(0).startOffset
		// console.log(c)
		// console.log("checking...")
		// if (input == text.slice(0, input.length)) {
		// 	console.log("correct")
		// } else {
		// let inputt = input
		// inner_html = ""
		// for (let i = 0; i < inputt.length; i++) {
		// 	if (inputt[i] == text[i]) {
		// 		inner_html +=
		// 			'<span class="text-textColor">' + text[i] + "</span>"
		// 	} else {
		// 		inner_html +=
		// 			'<span class="text-errorColor">' + text[i] + "</span>"
		// 	}
		// }
		// inner_html =
		// 	'<span class="text-textColor">' +
		// 	text.slice(0, input.length - 1) +
		// 	"</span>" +
		// 	'<span class="text-errorColor">' +
		// 	text[input.length - 1] +
		// 	"</span>" +
		// 	'<span class="text-textColor">'
	}
	// }
</script>

<section class="w-[100vw]">
	<!-- container -->
	<div class="container mx-auto lg:w-[90%] pt-3 overflow-hidden">
		<div
			contenteditable="true"
			class="text text-2xl tracking-wider h-48 text-textColor caret-yellowAccent outline-none w-100"
			bind:textContent={input}
			bind:innerHTML={inner_html}
			on:input={checkText}
		/>
	</div>
</section>

<style>
	.text {
		font-family: "Roboto Mono", monospace;
	}
	.error {
		color: #ca4754;
	}
</style>
