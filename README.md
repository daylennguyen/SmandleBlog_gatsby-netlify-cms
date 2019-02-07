**[Based Upon Gatsby + Netlify CMS Starter](https://gatsby-netlify-cms.netlify.com/)**.
[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)
>>	An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS.



[Gatsby](https://www.gatsbyjs.org/docs/)
> React-based, GraphQL powered, static site generator
> [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).
> - static files for incredibly fast page loads
> - service workers
> - code splitting
> - server-side rendering
> - intelligent image loading
> - asset optimization
> - and data prefetching. All out of the box. I didn’t believe the speed until I tried it myself.

[Netlify CMS](https://www.netlifycms.org)
[Netlify](https://www.netlify.com) 
>for continuous deployment, and CDN distribution.

[JAMstack architecture](https://jamstack.org)
> using Git as a single source of truth

[bulma](https://bulma.io/)
> open source CSS framework based on Flexbox; also uses SASS

Node.js

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
