import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

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
  return(
    <div>
      <h3>Topic Detail</h3>
    </div>
  );
}

function App(){
  return(
    <div className='App'>

        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/topics' element={<TopicList/>}/>
            <Route path='/topics/:topicId' element={<TopicDetail/>}/>

        </Routes>

    </div>
    
    
  );
}

export default App;
