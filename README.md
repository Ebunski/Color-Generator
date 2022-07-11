# 8. Color generator

Generates light and dark shades of a color code

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Features:
Receives a color code and generates 10 light tones and 10 dark shades of the color.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See hover and active states for all interactive elements on the page.
- Have colors generated.
- Copy color codes to clipboard.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- React javascript
- CSS custom properties and dynamically rendered css classes
- Flexbox and grid

## My process

- I went through the mobile and desktop styles on the css files
- Created the layout of the components
- Gave the page life with the magic of javascript.

### What I learnt

1. React:

- Used the Values.js package:
  new Values('#code')
  methods:
  .tint(s) (num) - 100%/num
  .shade(s) (num)
  .all(num)
- useRef to add # onFocus
- converting rgba to hex code:
  function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
  }
- navigator object: contains information about the browser.
  .clipboard.writeText()
  Overall it was a very wonderful project.

## Author

- Website - [coming soon...]
- LinkedIn - https://www.linkedin.com/in/ebunoluwa-oyebola-1490021b1
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thank you freecodecamp for this series.
