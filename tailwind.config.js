/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#0f7070",
                secondary: "#ecc94b",
                main: "#32323d", // text
                placeholder: "#757575",
                nav: "#0f7070", // hover nav
                alpha: "hsla(0,0%,100%,0.3)",
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
                primary: "#ced9d9",
                player: "#c0d8d8",
                hoverIcon: "#ccd4d4", // icon
            },
            borderColor: {},
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};
