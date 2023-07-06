/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				mainColor: "#323437",
				mainlight: "#646669",
				yellowAccent: "#e2b714",
				caretColor: "#e2b714",
				errorColor: "#ca4754",
				textColor: "#d1d0c5",
				optionsBoxColor: "#2c2e31",
				// theme 1
				// mainColor: "#655560",
				// mainlight: "#A4969B",
				// yellowAccent: "#C4CAD0",
				// caretColor: "#C4CAD0",
				// errorColor: "#ca4754",
				// textColor: "#FCF7FF",
				// optionsBoxColor: "#2c2e31",
				// theme 1
				// mainColor: "#DAB785",
				// mainlight: "#574935",
				// yellowAccent: "#031D44",
				// caretColor: "#031D44",
				// errorColor: "#ca4754",
				// textColor: "#031D44",
				// optionsBoxColor: "#C4A477",
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
