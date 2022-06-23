module.exports = {
  content: ["./**/*.{pug,html}", "./src/**/*.js"],
  daisyui: {
    themes: [{
      letswrite: {
        "primary": "#167FFF",
        "secondary": "#42A6F7",
        "accent": "#1FB2A6",
        "neutral": "#191D24",
        "base-100": "#2A303C",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272"
      },
    }],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ]
}
