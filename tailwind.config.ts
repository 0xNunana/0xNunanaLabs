import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "hero":"url('/me.webp')"
      
        },
      colors:{
        "0xblue":"#3a53e4",
        "0xseo":"#29292b"
      },   gridColumn: {
        'span-half': 'span 1.5 / span 1.5',
      },
      keyframes:{
        slideL:{
          '0%':{
            opacity:'0',
transform:'translateX(50px)'
          },
         
          '100%':{
            opacity:'1',
            transform:'translateX(0)'

          }
        },
        slideR:{
          '0%':{
            opacity:'0',
transform:'translateX(-50px)'
          },
         
          '100%':{
            opacity:'1',
            transform:'translateX(0)'

          }
        },
        slideD:{
          '0%':{
            opacity:'0',
transform:'translateY(-50px)'
          },
         
          '100%':{
            opacity:'1',
            transform:'translateY(0)'

          }
        },slideU:{
          '0%':{
            opacity:'0',
transform:'translateY(50px)'
          },
         
          '100%':{
            opacity:'1',
            transform:'translateY(0)'

          }
        },scaleU:{
          '0%':{
            opacity:'0',
transform:'scale(0)'
          },
         
          '100%':{
            opacity:'1',
            transform:'scale(1)'

          }
        }


      },
      animation:{
        'slideLeft':'slideL 2s ease forwards',
        'slideDown':'slideD 2s ease forwards',
        'slideUp':'slideU 2s ease forwards',
        'slideRight':'slideU 2s ease forwards',
        'scaleUp':'scaleU 2s ease forwards'
      }
    },
  },
  plugins: [],
};
export default config;
