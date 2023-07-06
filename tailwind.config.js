/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				// mainColor: "#323437",
				// mainlight: "#646669",
				// yellowAccent: "#e2b714",
				// caretColor: "#e2b714",
				// errorColor: "#ca4754",
				// textColor: "#d1d0c5",
				// optionsBoxColor: "#2c2e31",
				mainColor: "#231e20",
				mainlight: "#646669",
				yellowAccent: "#e1b7a3",
				caretColor: "#e1b7a3",
				errorColor: "#ca4754",
				textColor: "#d1d0c5",
				optionsBoxColor: "#1F1B1C",
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
