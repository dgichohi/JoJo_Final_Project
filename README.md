# JoJo's Bizarre Adventure - Fan Page Project

The purpose of this project is to create and develop a React-based web application exploring a the popular multi-media show, JoJo's Bizarre Adventure characters story and creator. 


## Technologies:
- React
- JavaScript
- Node.js and npm
- React Router DOM (v6)
- Tailwind CSS / CSS

---

## Prerequisites
Please ensure that you having the following installed:
 - Node.js
 - npm (this should come with Node.js)


## Installation

This project uses Tailwind CSS for styling, please run these in the file terminal:
- npm install -D tailwindcss@3 postcss autoprefixer
- npx tailwindcss init -p

Which would then create tailwind.config.js.

Once created please open tailwind.config.js and include this into the content portion: 

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


Add Tailwind Directives as well at the top of index.css file:
@tailwind base;
@tailwind components;
@tailwind utilities;


Once complete restart the server and sun the app:
 - npm start

If experiencing issues with routers, please follow these steps:

First uninstall the broken react-router with this:
- npm uninstall react-router-dom react-router

Then install this specific version:
- npm i react-router-dom@6

Lastly, please restart and run the server with:
- npm start
