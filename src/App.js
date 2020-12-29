import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration'
import { Help, Preview, NotFound, Page } from './pages'
// import Help from './pages/Help'

/**
 * Main application componenet
 */
const App = (props) => {
  //***This is for the preview options/not sure how they work yet.... */
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
  const repoName = repoNameArray[1]
  return (
    <Fragment>
      <Helmet>
      {/* ***This is for the preview options/not sure how they work yet.... */}
      <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/help' />
          <Route exact path='/help' component={Help} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/page/:uid' component={Page} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App


// React Helmet is a library that helps to manage the document head in React applications. 
// We can use it to change the page title, language, and meta-information.

//<Switch /> component will only render the first route that matches/includes 
//the path. Once it finds the first route that matches the path, it will not look for any 
//other matches. It also allows for nested routes to work properly, 
//which is something that <Router /> will not be able to handle.

// React Router is a package that allows you to configure routes that show only the 
// components you specify on the page depending on the route. For example, if you have a 
// long list of movies and only want to show the user’s favorites when they click on a ‘favorites’ 
// button, you can do that with React Router.

// to set the default page, you can use <Redirect>

//  <Route exact path='/page/:uid' component={Page} />
//The route above path would be written as www.prismic.../page/test