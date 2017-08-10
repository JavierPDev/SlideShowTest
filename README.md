## Live Demo
[Demo](http://sh.javierdev.com)

## Instructions
The HTML file with working slideshow component is located at repo path `/dist/index.html`.

To use in your own HTML file, include the script file at repo path `/dist/sh-slideshow-component.js` at the bottom of your HTML body. Then place the below markup in your HTML where you want your component:
```html
<div ng-app="sparkHireSlideshow">
  <sh-slideshow></sh-slideshow>
</div>
```

`ng-app="sparkHireSlideshow"` can also be placed in the tag of another element containing the actual component (eg. `<html>` or `<body>`).

## Brief Write-up

The first step was to consider what tools to use. I decided on Angularjs since it is rather easy to plug compiled components into the page as HTML elements to get the desired effect. Angular-ui-bootstrap was chosen because it is a proven package with lots of support and it includes a nice carousel. Webpack was used for bundling together with Babel to enable use of ES6 and import statements. It also helped so that the carousel module of angular-ui-bootstrap could be imported without including the whole package. NPM was used as the package manager and for its script capability (ie. `npm run build`).

From there it was a simple matter of bootstrapping the app and writing up a component with a lifecycle hook method calling the API and loading the data into the carousel when the component initializes. Total time was an hour and a half.


### Development
```bash
# Install dependencies
npm install

# Start app in development server
npm start

# Build
npm run build

```

