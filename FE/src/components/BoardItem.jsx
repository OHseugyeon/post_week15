import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BoardItemBlock = styled.div`
  display: flex;

  .contents {
    margin: 0 auto;

    h2 {
      margin: 0;
      cursor: pointer;
      border-bottom: 1px solid grey;
      padding-bottom: 1px;
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  // 컴포넌트가 바로 옆에 붙어 있는 경우에 사용
  & + & {
    margin-top: 3rem;
  }
`;

const BoardItem = ({ title, postID }) => {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`/post/${postID}`);
  };
  return (
    <BoardItemBlock>
      <div className="contents">
        <h2 onClick={goPost}>{title}</h2>
        <p>자세한 내용은 제목 클릭!</p>
      </div>
    </BoardItemBlock>
  );
};

export default BoardItem;
