/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    "2xl": "800px",
                },
            },
            backgroundImage: {
                background: "url('/background.webp')",
            },
            fontFamily: {
                jost: ["Jost", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
