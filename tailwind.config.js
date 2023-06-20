/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				veryDarkGrey: "#323437",
				lightGrey: "#646669",
				yellowAccent: "#e2b714",
				caretColor: "#e2b714",
				errorColor: "#ca4754",
			},
			fontFamily: {
				body: ["Roboto Mono"],
			},
		},
	},
	plugins: [],
}
