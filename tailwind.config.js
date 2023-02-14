/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary))",
                main: "rgb(var(--main))", // text
                sub: "rgb(var(--sub))", // text sub
                placeholder: "rgb(var(--placeholder))",
                nav: "rgb(var(--nav))", // hover nav
                "nav-text": "rgb(var(--nav-text))", // hover nav
                alpha: "hsla(var(--alpha) / 0.1)",
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
                screen: "rgb(var(--bg-screen))",
                player: "rgb(var(--bg-player))",
                hoverIcon: "rgb(var(--bg-hover-icon))", // icon
            },
            backgroundImage: {},
            borderColor: {},
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
    },
    plugins: [],
};
