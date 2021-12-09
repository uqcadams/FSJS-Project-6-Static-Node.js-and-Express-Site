# Full Stack JavaScript Techdegree: Project 6

Title: Static Node.js and Express Site

Author: Chris Adams

Date Created: 8 Dec 2021

GitHub Repo: https://github.com/uqcadams/FSJS-Project-6-Static-Node.js-and-Express-Site

## Description

A portfolio website showcasing a range of HTML, CSS, and JavaScript projects developed throughout the current Techdegree. The website uses Node.js and Express to render Pug templates, drawing project information from a custom-populated JSON file.

Routes, requests, and error handling has been self-authored, and middleware has been designed to improve the usability and functionality of the site. Dependencies are packaged and installed via NPM, and during testing has been served use Nodemon v2.0.15.

Implementation was developed on macOS Monterey v12.0, using Visual Studio Code v1.62.3

Tested successfully using:

Firefox Developer Edition - Version 95.0b12
Microsoft Edge - Version 96.0.1054.43
Google Chrome - Version 96.0.4664.93
Opera - Version 82.0.4227.23

## Installation

Using your terminal, navigate to the root directory.

Install the project dependencies using npm.

```bash
npm install
```

## Changes to Layout, CSS, and Styles

All CSS changes have been applied to the custom-styles.css file, and imported after the styles.css. This respects the cascade, and allows these new styles to override the provided styles.

Re-Skinning:

The color theme implemented is an homage to the 1990s LucasArts game "Day of the Tentacle", perhaps one of the greatest games ever made. The purple and green colour themes are reminiscent of the evil Purple Tentacle. Handwritten fonts were also super cool back in the 90s, so there you go.

1. Imported the Rock Salt cursive front from Google Fonts, and accompanied this with the sans-serif "Noto Sons" font to refine the overall appearance.
2. A dark purple theme colour was used back the background and headers. I've used !important to override specificity issues produced by conflicting stylesheets; not best practice, but does the job.
3. A nuclear green was used for colour highlights. This is also used as a hover effect when hovering over any headers.
4. h1 header margins were increased, to made the pages feel less "cramped".
5. I also overrode the layout styling for the wrapper, article, and nav elements. I wanted the bottom "back" button to always be at the bottom of the page when there was not enough content to fill the page. Looks nicer.
6. I customised the error handler layout and presentation. It also now looks nicer, I think.

## Copyright Attributions

Attribution for 404 Error handler image:

www.freepik,com, (2021) 404 Error Handler Vector Image [Online] https://www.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_20824303.htm
