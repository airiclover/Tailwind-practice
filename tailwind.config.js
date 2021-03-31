module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      amber: "#fff9f5",
      red: "#ff7474",
      pink: {
        light: "#fac7c777",
        dark: "#eee3e4",
      },
      gray: {
        light: "#c4c4c4",
        dark: "#555",
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
