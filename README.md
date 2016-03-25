# React Popover

Simple React Popover component similar to Twitter Bootstrap's Popover. No other dependencies other than React are required i.e. no jQuery. This component is designed to be extensible, there are many more features that could be added in the future.

At the moment it's possible to specify the content of the popover, preferred alignment (e.g. top, right, bottom or left). The component will automatically switch to a visible alignment if current is off-screen. Width, height and other visual traits can all be specified in the CSS (Sass). See the simple API below for more information.

The React app is built using Webpack. This is based on another repo of mine: [react-webpack-boilerplate](https://github.com/mattyrichards/react-webpack-boilerplate).

Working demo can be [found here](http://www.kreative.co.uk/github/react-popover).

Once you have downloaded/cloned the repo, run:

    $ npm install

The following commands are then available:

    $ npm run build
    $ npm run dev

"build" - compiles (and minifies) the React app in the /build/ folder ready for deployment.

"dev" - starts up the dev server (http://localhost:3000) with HMR.
