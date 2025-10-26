import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "375px",
                md: "768px",
                lg: "976px",
            },
            fontFamily: {
                sans: "var(--font-raleway)",
                'raleway': "var(--font-raleway)",
                'cinematic': ['var(--font-orbitron)', 'monospace'],
                'modern': ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                'roar-gold': '#ffd000',
                'roar-orange': '#ff9900',
                'roar-black': '#000000',
                'roar-gray': '#1a1a1a',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                },
            },    
        },
    },
    plugins: [],
};
export default config;
