import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import axios from 'axios';

const BoardListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const BoardList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // API 호출
        const response = await axios.get('http://127.0.0.1:8000/posts');
        setPostList(response.data); // API 응답으로 받은 데이터를 state에 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false); // 로딩 상태 변경
    };
    fetchData(); // useEffect에서 fetchData 함수 호출
  }, []);

  if (loading) {
    return <BoardListBlock>대기중...</BoardListBlock>;
  }

  return (
    <BoardListBlock>
      {postList.map((e) => (
        <BoardItem key={e.id} postID={e.id} title={e.title} />
      ))}
    </BoardListBlock>
  );
};

export default BoardList;
