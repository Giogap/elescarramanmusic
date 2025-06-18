const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|input|navbar|popover|ripple|spinner|form).js",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
