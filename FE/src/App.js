import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import HomeInput from './components/HomeInput';

function App() {
  const [postList, setPostList] = useState([
    { postID: 1, title: '동덕멋사짱.', content: '내용내용' },
    { postID: 2, title: '프론트 사자', content: '내용내용' },
    { postID: 3, title: '파이팅❤️', content: '내용내용' },
  ]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomeInput postList={postList} setPostList={setPostList} />}
        />
        <Route path="/post" element={<BoardList postList={postList} />} />
        <Route
          path="/post/:postID"
          element={<BoardDetail postList={postList} />}
        />
      </Routes>
    </>
  );
}

export default App;
