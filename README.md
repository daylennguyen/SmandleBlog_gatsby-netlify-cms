# IoT Innovations Official Website
 [![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)
[Based Upon Gatsby + Netlify CMS Starter](https://gatsby-netlify-cms.netlify.com/) 
### About
`This repo contains the files, of whom are ref'd by Netlify to deploy the IoT Innovations LLC site.`


## Dependencies 

| Dependency                                                   | Reference                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Bulma, CSS framework 🖌](https://bulma.io/)                  | Open source and based on Flex box; Bulma provides a baseline for styling and components; which allows for us to only need one Sass file |
| [Flatpak, Vector Graphics  👷](https://www.flaticon.com/packs/multimedia-57) | Icons made by [photo3idea_studio](https://www.flaticon.com/packs/multimedia-57) from [flaticon](https://www.flaticon.com/) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/) |
| [GatsbyJS  🔥](https://www.gatsbyjs.org/docs/)                | `React-based, GraphQL powered, static site generator. (THATS SOME FAST MUMBO JUMBO!)`</br>static files for incredibly fast page loads, service workers, code splitting,  </br>server-side rendering, intelligent image loading, asset optimization, and data pre-fetching. <br />[Also see: `Gatsby v2`](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/). |
| [Material Design Icons 😼](https://dev.materialdesignicons.com/getting-started) | Also see: [Cheatsheet](https://cdn.materialdesignicons.com/3.4.93/) |
| [Netlify CMS](https://www.netlifycms.org) and [Netlify :crown:](https://www.netlify.com) | For continuous deployment, and CDN distribution.<br/>An all-in-one work flow that combines global deployment, |

## 📁 File Structure 
```
  [/src]
    📁
    ├───📁 [cms]
    │   ├────── cms.js
    │   └───📁 [preview-templates]
    │       ├────── AboutPagePreview.js
    │       ├────── BlogPostPreview.js
    │       └────── ProductPagePreview.js
    ├───📁 [components]
    │   ├────── all.sass
    │   ├────── Content.js
    │   ├────── Features.js
    │   ├────── Layout.js
    │   ├────── Navbar.js
    │   ├────── PreviewCompatibleImage.js
    │   ├────── Pricing.js
    │   └────── Testimonials.js
    ├───📁 [img]
    │   ├────── github-icon.svg
    │   ├────── iot.png
    │   └────── logo.svg
    ├───📁 [pages]
    │   ├────── 404.js
    │   ├──────📁 [about]
    │   │      └────── index.md
    │   ├──────📁 [blog]
    │   │      ├────── 2016-12-17-making-sense-of-the-scaas-new-flavor-wheel.md
    │   │      ├────── 2017-01-04-a-beginners-guide-to-brewing-with-chemex.md
    │   │      ├────── 2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week.md
    │   │      └────── 2019-02-05-test-title.md
    │   ├──────📁 [contact]
    │   │      ├────── examples.js
    │   │      ├────── file-upload.js
    │   │      ├────── index.js
    │   │      └────── thanks.js
    │   ├────── index.js
    │   ├──────📁[products]
    │   │      └────── index.md
    │   └──────📁[tags]
    │          └────── index.js
    └───📁 [templates]
        ├────── about-page.js
        ├────── blog-post.js
        ├────── product-page.js
        └────── tags.js

```
### Dirs and Files, Short Descriptions
#### 	Sass file, for Style 😎
​		Location:           [`src/components/all.sass`](src/components/all.sass)  
​		Ref'd from:       [`src/components/Layout.js`](src/components/Layout.js)

------
# Color Palette

| Color Name      |   Value   |
| --------------- | --------- |
| $yolk           |  #FCF5E0  |
| $pastel-red     |  #FAE4D2  |
| $pastel-corn    |  #FDF0BC  |
| $pastel-blue    |  #DAF1F3  |
| $pastel-blueDark|  #BFE7E8  |
| $pastel-green   |  #E0F2D2  |
| $pastel-green2  |  #97E3A6  |
| $pastel-violet  |  #D6DFF1  |
| $paste-redDark  |  #F5D1C9  |
| $body-color     |  #1E2627  |


## Out of box Read Me	

### Access Locally

```shell
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```shell
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

> Windows users might encounter ```node-gyp``` errors when trying to npm install.
> To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

## Purgecss
> This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and . The bulma builds are usually ~170K but reduced 90% by purgecss.
>
