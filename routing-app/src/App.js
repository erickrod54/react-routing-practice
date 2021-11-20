import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

const HomePage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

const TopicList = () => {
  return(
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
}

const TopicDetail = () => {
  return(
    <div>
      <h1>Topic Detail</h1>
    </div>
  );
}

function App(){
  return(
    
      
      
        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route exact path='/topics' element={<TopicList/>}/>
            <Route path='/topics/:topicId' element={<TopicDetail/>}/>

        </Routes>
    
    
  );
}

export default App;
