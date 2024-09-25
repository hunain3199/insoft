/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: '#FFF9E8', // Light cream background
		  foreground: '#212B36', // Dark blue-gray for text
		  card: {
			DEFAULT: '#FFF9E8', // Light cream for cards
			foreground: '#212B36', // Dark blue-gray for card text
		  },
		  popover: {
			DEFAULT: '#FFF9E8', // Light cream for popovers
			foreground: '#212B36', // Dark blue-gray for popover text
		  },
		  primary: {
			DEFAULT: '#a22b3d', // Maroon as the main theme color
			foreground: '#FFF9E8', // Light cream text on maroon elements
		  },
		  secondary: {
			DEFAULT: '#FFF9E8', // Light cream for secondary elements
			foreground: '#a22b3d', // Maroon text on cream elements
		  },
		  muted: {
			DEFAULT: '#E5D5C5', // Soft warm gray for muted elements
			foreground: '#6E4C4B', // Warm taupe for muted text
		  },
		  accent: {
			DEFAULT: '#6E4C4B', // Warm taupe as the new accent color
			foreground: '#FFF9E8', // Light cream on accent elements
		  },
		  destructive: {
			DEFAULT: '#6E4C4B', // Warm taupe for destructive actions
			foreground: '#FFF9E8', // Light cream for destructive elements
		  },
		  border: '#a22b3d', // Maroon for borders
		  input: '#FFF9E8', // Light cream for inputs
		  ring: '#a22b3d', // Maroon for focus rings
		  chart: {
			'1': '#a22b3d', // Maroon for charts
			'2': '#6E4C4B', // Warm taupe
			'3': '#F3F4F6', // Light Gray
			'4': '#FFF9E8', // Light cream
			'5': '#212B36', // Dark blue-gray
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  