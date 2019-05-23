# Create a static blog with Nuxt + Markdown

### Introduction:
My inspiration for making this site came from my desire to build a portfolio where I could also have a highly performant blog without needing to rely on any services outside of my own application to provide that content. So in this article, I am going to attempt to show you how I was able to use Nuxt to generate a static site that serves dynamic markdown content(I will also provide a working example repo/deployment link).

So first things first, we need to initialize our project. You can run either of the following:

#### yarn:
`yarn create nuxt-app <my-static-blog>`
#### npx:
`npx create-nuxt-app <my-static-blog>`

Running either of those will take you through the Nuxt scaffolding CLI and will give you options to choose how you want your Nuxt application setup. This is the setup I'll be using:

![Nuxt CLI](https://i.imgur.com/gDUxFsa.png#nuxtcli)

Next we want to get all of our 1 package installed.
[@nuxtjs/markdownit](https://www.npmjs.com/package/@nuxtjs/markdownit) - A markdown parser which will convert your markdown into html, and allow for use in your Vue components.

Once you have that installed, go into your `nuxt.config.js` file and add the newly installed package to your modules property array like so:

```javascript
                  /* nuxt.config.js */
  ...
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/markdownit', { linkify: true }]
  ],
  ...
```

After you've done this, the next thing you want to do is get your directories set up to look something like this(Call the folders whatever you want):

![Root dir](https://i.imgur.com/1sfl5FS.png#rootdir)

The component nested in the `./pages/article` directory called `_slug.vue` is where our markdown content will be rendered.

![slug.vue](https://i.imgur.com/0iFFdMF.png#slug)

```javascript
                  /* nuxt.config.js */

  // Require Node's file system module:
  const fs = require('fs');

  // Array that will contain your route objects:
  const routesArray = [];

  // Array of files in the ./static/articles directory:
  const files = fs.readdirSync('./static/articles');

  // Create routes then push to routesArray:
  const createRoutesArray = () => {
    files.forEach((file) => {

      let name = file.substr(0, file.lastIndex0f('.'));
      let route = '/articles/' +  name;

      routesArray.push(route);
    })
  }

  //
  const getSlugs = (article, index) => {
    let slug = article.substr(0, article.lastIndexOf('.'))
    return `/articles/${slug}`
  }
```



More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).
