/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
         fontFamily: {
        fancy: ['"Playfair Display"', 'serif'],
        title: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
        accent: ["var(--font-quicksand)", "sans-serif"]
      }
        // colors: {
        //   primary: "red", // Custom primary color (change as needed)
        //   secondary: "#9333EA",
        //   accent: "#F59E0B",
        //   dark: "#1E293B",
        //   light: "#F3F4F6",
        // },
      },
    },
    plugins: [],
  };
  