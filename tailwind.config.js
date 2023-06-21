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
				textColor: "#d1d0c5",
			},
			fontFamily: {
				body: ["Roboto Mono"],
			},
			keyframes: {
				flash: {
					"25%, 40%": { opacity: "0" },
					"50%": { opacity: "1" },
					"80%": { opacity: "0" },
				},
			},
			animation: {
				flash: "flash 2.5s infinite",
			},
		},
	},
	plugins: [],
}
