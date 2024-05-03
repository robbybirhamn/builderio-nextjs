import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'matt-black': '#231f20',
        'white-opacity-60': 'rgba(255, 255, 255, 0.6)',
        'white': '#ffffff',
        'white-opacity-12': 'rgba(255, 255, 255, 0.12)',
        'white-opacity-8': 'rgba(255, 255, 255, 0.08)',
        'action-red': '#d96f6e',
        'accent-hover': '#f2d143',
        'accent-opacity-12': 'rgba(255, 226, 101, 0.12)',
        'accent-opacity-18': 'rgba(255, 226, 101, 0.18)',
        'accent': '#ffe265',
        'light-cream': '#fcf7f0',
        'green-light-1': '#d4f0e1',
        'dark-cream': '#f9ede1',
        'dirty-orange': '#e5ba75',
        'light-gray': '#9ac5d3',
        'green-dark': '#246241',
        'black-opacity-60': 'rgba(0, 0, 0, 0.6)',
        'dark-mode': '#1e303c',
        'green-light-2': '#ebf8f1',
        'darkest-cream': '#fbdbc2',
        'dark-gray': '#4fa4ab',
        'medium-gray': '#70b3c0',
        'yellow-dark': '#815d00',
        'pink': '#cd417e',
        'blue-light-1': '#c0ddff',
        'white-opacity-40': 'rgba(255, 255, 255, 0.4)',
        'black-opacity-20': 'rgba(0, 0, 0, 0.2)',
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
        'purple-light-1': '#c8bfff',
        'purple-dark': '#6b57ea',
        'purple-light-2': '#d9d3ff',
        'white-opacity-16': 'rgba(255, 255, 255, 0.16)',
        'yellow-light': '#fde680',
        'dark-blue': '#207593',
      },
      
    },

    fontFamily: {
      boldish: ['Boldish', 'sans-serif'],
      'clash-display': ['ClashDisplay-Semibold', 'sans-serif'],
      'hangry': ['Hangrymedium', 'sans-serif'],
      hangrytypewriter: ['Hangrytypewriter', 'sans-serif'],

    },

  },
  plugins: [],
};
export default config;
