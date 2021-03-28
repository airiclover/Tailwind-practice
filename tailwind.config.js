module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // "light-pink": "#fac7c777",
      // "dark-pink": "rgb(238, 227, 228)",
      // "light-yellow": "rgb(255 249 245)",
      white: "#fff",
      pink: {
        light: "#fac7c777",
        dark: "rgb(238, 227, 228)",
      },
      amber: {
        light: "rgb(255 249 245)",
      },
    },
    fontFamily: {
      Unna: ["Unna", "serif"],
      CourierNew: ["Courier New", "serif"],
    },
    boxShadow: {
      inner: "inset 0 0px 30px #fff",
    },
    extend: {
      backgroundImage: (theme) => ({
        topImg: "url('/IMG_6822.JPG')",
        stoneImg: "url('/light-grey-terrazzo.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
