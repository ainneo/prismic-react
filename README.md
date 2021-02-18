# Description
This is a full stack app. The frontend is built with React.js and the backend/cms is Prismic.

## Prismic React Starter
This project has been created with [`create-react-app`](https://github.com/facebookincubator/create-react-app). We added a zest of [prismic](https://github.com/prismicio/javascript-kit) inside it. It serves as a boilerplate React+Prismic application that will serves as a quick guide to get your own applications off the ground

## Quick bootstrap
The fastest way to run get started from scratch is using the Prismic command line tool to install the starter codebase, create a new Prismic repository and setup the Page custom type with only a few commands.
```bash
npm install -g prismic-cli
prismic new
```
Select a name for your new Prismic repository, the local folder for your project and finally select `React` to bootstrap the React.js starter project. The dependencies will be installed as well, so once the process is done, just navigate to the folder and run the app with `npm start`

Follow along with the Help's page instructions. You can safely ignore the instructions in the first two steps regarding creating a new repository and the Page custom type, the Prismic tool has taken care of that for you.

## Running the app in the development mode
Run the following command to launch the project in dev mode:
```
npm start
```
Then you can open your browser to http://localhost:3000.

## Building the app for production
Run the following command to create an optimized build of your site:
```
npm run build
```

## Deployment
This project is ready for deployment using [Netlify](https://www.netlify.com), thanks to the addition of a `_redirects` file located in the public folder. If you're interested in deploying to other platforms review the suggested [solutions](https://facebook.github.io/create-react-app/docs/deployment).

## Learn more about Prismic

You can find out more about how to use React.js with Prismic from [our React documentation](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch).


##  Hooking the backend to the frontend:
1. In the prismic-config file add your root end point URL to the apiEndpoint. 
example: ```export const apiEndpoint = 'https://prismic.cdn.prismic.io/api/v2'```

2. Make sure to import (require) prismic scripts:```import { client, linkResolver } from '../prismic-configuration''``` on every component that will be linked to your custom types, and call the page document by it's UID... UID is how the pages are queried from backend to the frontend.

See example links below: 
- prismic-config file: https://github.com/ainneo/prismic-react/blob/main/src/prismic-configuration.js
- pages component file: https://github.com/ainneo/prismic-react/blob/main/src/pages/Page.js
- custom types (json is automatically generated in prismic dashboard): https://github.com/ainneo/prismic-react/tree/main/custom_types


## MISC NOTES:
Install CLI via terminal - must have a prismic account, you will input account information when creating a new project, this links the local project to your prismic dashboard.... 
1. install CLI 
2. create new project  
3. input Prismic account details 
4. Now your local project is linked and will appear as a repo on your Prismic dashboard
