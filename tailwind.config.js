module.exports = {
        theme: {
          extend: {
            fontFamily: {
              rubik: "'Rubik', sans-serif",
              arabic: "'Amiri', serif"
            }
          },
        },
        variants: {},
        plugins: [],
        purge: {
          content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
          ]
        }
}