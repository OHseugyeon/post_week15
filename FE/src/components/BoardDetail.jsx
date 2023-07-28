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

const BoardDetail = () => {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/posts/${postID}`).then((response) => {
      setPost(response.data);
      setPostLoading(false);
    });
  }, []);

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
