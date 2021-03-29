module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      gray: "rgb(196, 196, 196)",
      amber: "rgb(255 249 245)",
      red: "rgb(255, 116, 116)",
      pink: {
        light: "#fac7c777",
        dark: "rgb(238, 227, 228)",
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
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
