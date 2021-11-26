import React from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";

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
      </ul>
    </div>
   
  )
}

const HomePage = () => {
  console.log()
  return(
    <div>
      <h3>Home Page</h3>
    </div>
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

  const { topicId } = useParams()

  return(
    <div>
      {/**you can test it with adding any 
       * value to the url, and locating in topics
       * topicDetail*/}
      <h3>Topic Detail is = { topicId } </h3>
    </div>
  );
}



function App(){
  return(
 
    <div className='App'>
    <Header />
          <Routes>
          
              <Route path='/' element={<HomePage/>}/>
              <Route path='/topics' element={<TopicList/>}/>
              <Route path='/topics/:topicId' element={<TopicDetail/>}/>
           
          </Routes>

      </div>

    
  );
}

export default App;
