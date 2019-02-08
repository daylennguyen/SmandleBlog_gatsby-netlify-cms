# **[Based Upon Gatsby + Netlify CMS Starter](https://gatsby-netlify-cms.netlify.com/)**.  
[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)


# Dependencies 
### [Bulma 🖌](https://bulma.io/)
`Open source CSS framework based on Flex box; also uses SASS`

### [Gatsby 🔥](https://www.gatsbyjs.org/docs/) 
`React-based, GraphQL powered, static site generator. (THATS SOME FAST MUMBO JUMBO!)`  
static files for incredibly fast page loads, service workers, code splitting, 
server-side rendering, intelligent image loading, asset optimization, and data pre-fetching.
###### [Also see: `Gatsby v2`](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).  
  
### [Netlify CMS](https://www.netlifycms.org) and [Netlify 🏯](https://www.netlify.com)    
`CMS = Content Management System`  
For continuous deployment, and CDN distribution.
An all-in-one work flow that combines global deployment, 
continuous integration, and automatic HTTPS.

------
# File Structure 📂
### Sass file, for Style 😎
	Location: [`src/components/all.sass`](src/components/all.sass) 
	referenced from: [`src/components/Layout.js`](src/components/Layout.js)


------
# Out of box Read Me	
### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and . The bulma builds are usually ~170K but reduced 90% by purgecss.
