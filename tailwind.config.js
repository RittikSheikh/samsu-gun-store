/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
        daisyui: {
          themes: [
            {
              mytheme: {
              
      "primary": "#0164af",
              
      "secondary": "#ea199a",
              
      "accent": "#9e36ed",
              
      "neutral": "#1B1924",
              
      "base-100": "#E6E1EA",
              
      "info": "#82B6F2",
              
      "success": "#1AAD75",
              
      "warning": "#E89417",
              
      "error": "#FC548C",
              },
            },
          ],
        },
  plugins: [require("daisyui")],
}
