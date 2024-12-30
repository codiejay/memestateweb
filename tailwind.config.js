/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-custom": "0px 4px 4px 0px #00000040 inset",
        "black-custom": "12px 12px 0px 0px #000000",
        "inset-custom-box": "6px 8px 8px 0px #0000007D inset",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
