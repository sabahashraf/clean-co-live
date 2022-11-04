/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  /*  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#176F6B",

          secondary: "#FFC000",

          accent: "#FFEDD5",

          neutral: "#F3F4F6",

          "base-100": "#FFFFFF",

          info: "#98A8DD",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
    ],
  }, */
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",

          secondary: "#FFC000",

          accent: "#FFEDD5",

          neutral: "#F3F4F6",

          "base-100": "#FFFFFF",

          info: "#98A8DD",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#D9F99D",

          secondary: "#FDE68A",

          accent: "#4B5563",

          neutral: "#F3F4F6",

          "base-100": "#1F2937",

          info: "#98A8DD",

          success: "#DFF2A1",

          warning: "#1BBB70",

          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
