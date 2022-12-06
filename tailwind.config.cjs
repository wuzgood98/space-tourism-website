/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "rgb(11,13,23)",
        lightBlue: "rgb(208,214,249)",
        offWhite: "rgb(255,255,255)",
        darkGray: "#979797",
        darkGrayTwo: "#979790",
        sideBarBlur: "rgba(255, 255, 255, 0.04)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        homeMobile: "url('/home/background-home-mobile.jpg')",
        homeTablet: "url('/home/background-home-tablet.jpg')",
        homeDesktop: "url('/home/background-home-desktop.jpg')",
        technologyMobile: "url('/technology/background-technology-mobile.jpg')",
        technologyTablet: "url('/technology/background-technology-tablet.jpg')",
        technologyDesktop:
          "url('/technology/background-technology-desktop.jpg')",
        destinationMobile:
          "url('/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/destination/background-destination-tablet.jpg')",
        destinationDesktop:
          "url('/destination/background-destination-desktop.jpg')",
        crewMobile: "url('/crew/background-crew-mobile.jpg')",
        crewTablet: "url('/crew/background-crew-tablet.jpg')",
        crewDesktop: "url('/crew/background-crew-desktop.jpg')",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
      backgroundPosition: {
        bottomCenter: "bottom center",
        centerCenter: "center center",
      },
    },
  },
  plugins: [],
};
