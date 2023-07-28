import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import HomeInput from './components/HomeInput';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeInput />} />
        <Route path="/post" element={<BoardList />} />
        <Route path="/post/:postID" element={<BoardDetail />} />
      </Routes>
    </>
  );
}

export default App;
