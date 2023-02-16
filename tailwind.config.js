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
                header: "rgba(var(--bg-screen) / 0.9)",
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
        keyframes: {
            "slide-right": {
                "0%": {
                    "-webkit-transform": " translateX(-500px);",
                    transform: "translateX(-500px);",
                },
                "100%": {
                    "-webkit-transform": "translateX(0);",
                    transform: "translateX(0);",
                },
            },
            "slide-left": {
                "0%": {
                    "-webkit-transform": " translateX(500px);",
                    transform: "translateX(500px);",
                },
                "100%": {
                    "-webkit-transform": "translateX(0);",
                    transform: "translateX(0);",
                },
            },
            "slide-left2": {
                "0%": {
                    "-webkit-transform": " translateX(500px);",
                    transform: "translateX(500px);",
                },
                "100%": {
                    "-webkit-transform": "translateX(0);",
                    transform: "translateX(0);",
                },
            },
            "rotate-center": {
                "0%": {
                    "-webkit-transform": "rotate(0);",
                    transform: "rotate(0);",
                },
                "100%": {
                    "-webkit-transform": "rotate(360deg);",
                    transform: "rotate(360deg);",
                },
            },
            "rotate-center-pause": {
                "0%": {
                    "-webkit-transform": "rotate(360deg);",
                    transform: "rotate(360deg);",
                    "border-radius": "99999px",
                },
                "100%": {
                    "-webkit-transform": "rotate(0);",
                    transform: "rotate(0);",
                },
            },
            "scale-up-center": {
                "0%": {
                    "-webkit-transform": "scale(0);",
                    transform: "scale(0);",
                },
                "100%": {
                    "-webkit-transform": "scale(1);",
                    transform: "scale(1);",
                },
            },
            "scale-up-image": {
                "0%": {
                    "-webkit-transform": "scale(1);",
                    transform: "scale(1);",
                },
                "100%": {
                    "-webkit-transform": "scale(1.2);",
                    transform: "scale(1.2);",
                },
            },
            "scale-down-image": {
                "0%": {
                    "-webkit-transform": "scale(1.2);",
                    transform: "scale(1.2);",
                },
                "100%": {
                    "-webkit-transform": "scale(1);",
                    transform: "scale(1);",
                },
            },
        },
        animation: {
            "slide-right":
                "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            "slide-left":
                "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            "slide-left2":
                "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            "rotate-center": "rotate-center 8s linear infinite;",
            "rotate-center-pause": "rotate-center-pause 0.3s linear 2 both;",
            "scale-up-center":
                "scale-up-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            "scale-up-image":
                "scale-up-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            "scale-down-image":
                "scale-down-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        },
        flex: {
            4: "4 4 0%",
            6: "6 6 0%",
            3: "3 3 0%",
            7: "7 7 0%",
        },
    },
    plugins: [],
};
