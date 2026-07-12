/** @type {import('tailwindcss').Config} */

export default {

    content: [

        "./index.html",

        "./src/**/*.{js,jsx}"

    ],

    theme: {

        extend: {

            colors: {

                primary: "#16A34A",

                qualcomm: "#0066FF",

                background: "#020617",

                surface: "#111827",

                cyan: "#22D3EE",

                lime: "#84CC16",

                warning: "#F59E0B",

                danger: "#EF4444"

            },

            fontFamily: {

                sans: ["Inter", "sans-serif"]

            }

        }

    },

    plugins: []

}