module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_blue: "#3a66ff",
                primary: "#333b75",
                accent: "#73e6ff",
                primary_black: "#07090a",
                primary_heavy_dark: "#00010D",
                primary_dark: "#111419",
                primary_light: "#292B2F",
                primary_white: "#ffffff",
                primary_blue_secondary: "#3A66FF",
            },
            borderRadius: {
                2.5: "0.625rem", // 10px
                1.25: "0.313rem", // 5px
            },
            spacing: {
                25: "6.25rem", // 100px
                67.75: "16.938rem", // 271px
                68.5: "17.125rem", // 274px
                115: "28.75rem", // 460px
                128: "32rem",
                190: "47.5rem", // 760px
                230: "57.5rem", // 920px
            },
        },
    },
    plugins: [],
};
