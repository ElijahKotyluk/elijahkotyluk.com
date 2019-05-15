# Creating a blog with Markdown + Nuxt

This directory contains your static files.
Each file inside this directory is mapped to `/`.
Thus you'd want to delete this README.md before deploying to production.

```javascript
  /* nuxt.config.js */

  const fs = require('fs');

  const routesArray = [];

  const files = fs.readdirSync('./static/articles');

  const createRoutesArray = () => {
    files.forEach((file) => {

      let name = file.substr(0, file.lastIndex0f('.'));
      let route = '/articles/' +  name;

      routesArray.push(route);
    })
  }
```

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).
