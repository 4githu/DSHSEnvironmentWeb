import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'water-drop': {
  				'0%': { 
  					height: '0px',
  					opacity: '0.8'
  				},
  				'50%': { 
  					height: '100px',
  					opacity: '1'
  				},
  				'100%': { 
  					height: '100px',
  					opacity: '0'
  				}
  			},
  			'shower-stream': {
  				'0%': { 
  					height: '0px',
  					opacity: '0.8'
  				},
  				'100%': { 
  					height: '150px',
  					opacity: '0.3'
  				}
  			},
  			'rain-fall': {
  				'0%': { 
  					transform: 'translateY(0)',
  					opacity: '1'
  				},
  				'100%': { 
  					transform: 'translateY(100px)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'water-drop': 'water-drop 1.5s infinite',
  			'shower-stream': 'shower-stream 0.8s infinite',
  			'rain-fall': 'rain-fall 1s infinite'
  		}
  	}
  },
  plugins: [],
} satisfies Config;
