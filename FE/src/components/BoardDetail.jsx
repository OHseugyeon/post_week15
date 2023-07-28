import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const DetailBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgoldenrodyellow;
`;

const PostTitle = styled.span`
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-size: 25px;
`;

const PostContent = styled.div`
  margin-top: 1rem;
`;

const BoardDetail = ({ postList }) => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    // postID에 해당하는 게시물을 찾기
    const targetPost = postList.find(
      (item) => item.postID === parseInt(postID),
    );
    if (targetPost) {
      setPost(targetPost);
      setPostLoading(false);
    } else {
      // 해당 postID에 해당하는 게시물이 없는 경우, 예외 처리
    }
  }, [postID, postList]);
  return (
    <>
      <DetailBlock>
        <PostTitle>{post && post.title}</PostTitle>
        {postLoading ? (
          <h2>loading...</h2>
        ) : (
          <PostContent>{post && post.content}</PostContent>
        )}
      </DetailBlock>
    </>
  );
};

export default BoardDetail;
