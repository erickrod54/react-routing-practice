import React, { useState } from "react";
import { Route, Routes, Link, useParams, useLocation, Navigate } from "react-router-dom";

import './App.css';

const Header = () => {
  return(
   
    <div className="nav">
      <ul>
        {/**Link is a feature of react router, mimics
         * the a tag (solves the whole page refresh 
         * feature from the a tag), instead href Link
         * use to, and  instead of refresh, render in
         * a SPA
        */}
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/topics">Topics</Link>        
        </li>
        <li>
        <Link to="/topics/:topicId">Topics Detail</Link>       
        </li>
        <li>
        <Link to="/profile">Profile Page</Link>        
        </li>
      </ul>
    </div>
   
  )
}

const HomePage = () => {
  /**test useLocation Hook for HomePage 
   * location*/
  /**console.log(useLocation()) */
  
  return(
    /**fragments gives a component the capability
     * to have more jsx elements like sub jsx or
     * have a group jsx elements at same level
     * like the example below
     */
    <>
    <div>
      <h3>Home Page</h3>
    </div>
    <div>
      <h3> For this second element 
        the whole jsx must be in a fragment {'< >'}
      </h3>
    </div>
    </>
  );
}

const TopicList = () => {
  return(
    <div>
      <h3>Topic List Page</h3>
    </div>
  );
}

const TopicDetail = () => {
  /**this way i access to url's params */
  const { topicId } = useParams()
  /**useLocation hook get information like
   * pathname, search, hash, state, key, the use
   * is by component
   */

  /**To use search prop from useLccation i'll 
   * test using a query into the url this way
   * after a topicId example 4434 
   * 
   * '?first=Erick&last=Rodriguez'
  */
   const query = new URLSearchParams(useLocation().search)
   console.log(useLocation())
  return(
    <div>
      {/**you can test it with adding any 
       * value to the url, and locating in topics
       * topicDetail*/}
      <h3>Topic Detail is = { topicId } </h3>
      <h2>{query.get("first")}</h2>
      <h2>{query.get("last")}</h2>
    </div>
  );
}

const Dashboard = () => {
  return(
    <div>
    <h1>Welcome to Dashboard</h1>
  </div>
  )
}

const Profile = () => {
  console.log(useLocation())
  return(
    <div>
      <h3>Profile Page</h3>
    </div>
  );
}
const NotFound = () => {
  return(
    <div>
      <h3>Not Found Page</h3>
    </div>
  )
}

function App(){
  /**i will test two features first mimic a log in
 * and then the useHistory hook to manage a log in
 * feature, for that we will create an state using
 * useState Hook
 */

  /**we create a state with the initial value
   * of false*/
  const [ login, setLogin ] = useState(false)
  console.log('outside the routes', login)

  return(
 
    <div className='App'>
    <Header />
      <button 
        onClick={()=>setLogin(!login)}>
          {login ? 
          "Login" : "Log Out"}
      </button>
          <Routes>
          
              <Route path='/' element={<HomePage/>}/>
              <Route path='/topics' element={<TopicList/>}/>
              <Route path='/topics/:topicId' element={<TopicDetail/>}/>
              {/**fixed protected route to profile page */}
              <Route path='/profile' element={login ? <Navigate to='/'/> : <Profile />} />
              {console.log('inside the routes', login)}
                                          {/**navigate does
                                           * what redirect was
                                           * before and has more 
                                           * features
                                           */}
                  
              {/**for a notFound page or 404 error
               * can be done like this, has to 
               * be the last route in your route 
               * echosystem '* means all the routes 
               * that are not include above, renders
               * <NotFound />'
               */}
               <Route path="/" element={<Dashboard />}/>
              <Route path="*" element={<NotFound />}/>
              
          </Routes>

      </div>

    
  );
}

export default App;
