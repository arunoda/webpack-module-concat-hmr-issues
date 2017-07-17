## HMR issues we face with Webpack's module-contact-plugin

**Steps to reproduce**

* Run the app with "npm run dev"
* Then open 'pages/index.js' and remove the "Alert" component import
* Now you can see an error on the console.

After that, webpack is not doing anything.
