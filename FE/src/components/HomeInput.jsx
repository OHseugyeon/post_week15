import React, { useState } from 'react';
import { styled } from 'styled-components';
import BoardList from './BoardList';

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  .inputTitle {
    margin: 0 auto;
    width: 30%;
    height: 25px;
    padding: 10px;
    border-radius: 1rem;
    border: 2px solid gray;
    background: lightgrey;

    &:focus {
      outline: none;
    }
  }

  .inputContent {
    margin: 0 auto;
    width: 65%;
    height: 15rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 2px solid gray;
    background: #eee;
    resize: none;

    &:focus {
      outline: none;
    }
  }

  .submit {
    width: 30%;
    padding: 15px 10px;
    margin: 0px auto;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 2px solid gray;
    background-color: lightskyblue;
    cursor: pointer;
    text-align: center;
    font-weight: 700;

    &:hover {
      background-color: lightcoral;
      color: white;
      transition: all 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const HomeInput = ({ postList, setPostList }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    // 새로운 게시물 객체 생성
    const newPost = {
      postID: postList.length + 1, // 현재 게시물 개수 + 1로 ID 생성 (임시로 사용)
      title: title,
      content: content,
    };

    // 기존의 게시물 목록에 새로운 게시물 추가
    setPostList([...postList, newPost]);

    // 입력값 초기화
    setInputs({
      title: '',
      content: '',
    });
  };

  return (
    <>
      <InputDiv>
        <input
          className="inputTitle"
          name="title"
          value={title}
          onChange={onChange}
        />
        <textarea
          className="inputContent"
          name="content"
          value={content}
          onChange={onChange}
        />
        <div className="submit" onClick={onSubmit}>
          저장
        </div>
      </InputDiv>
      <BoardList postList={postList} title={title} content={content} />
    </>
  );
};

export default HomeInput;
