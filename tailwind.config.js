/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        rubik:["Rubik","sans-serif"]
      },
      colors:{
        // lightPurple:"#007aff",
        brand:"#6674cc",
        paraColor:"#777c85",
        innerAni:"#f1e4ff",
        cardDis:"#f1e4ff",
        lightBlack:"#363a45",
        lightBlack2:"#4a4f5c",
        offWhite: "#f7f8fc"
      },
      animation:{
        moveY:"move 5s linear infinite"
      },
      keyframes:{
        move:{
          "0%, 100%":{transform: "translateY(0)"},
          "50%": {transform:"translateY(1rem)"}
        }
      }
    },
  },
  plugins: [],
}
