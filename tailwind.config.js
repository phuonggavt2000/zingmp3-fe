/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#0f7070",
                secondary: "#ecc94b",
                main: "#32323d",
                skin: "#0000001a",
                placeholder: "#757575",
                // ...
            },
            width: {
                leftSidebar: "240px",
                rightSidebar: "330px",
            },
            height: {
                player: "90px",
                header: "70px",
            },
            backgroundColor: {
                skin: "#ced9d9",
                alpha: "hsla(0,0%,100%,0.3)",
                player: "#c0d8d8",
            },
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};
