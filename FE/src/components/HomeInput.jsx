import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import BoardList from './BoardList';
import axios from 'axios';

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

const HomeInput = () => {
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
    try {
      // HTTP POST 요청으로 새로운 게시물 생성
      axios
        .post('http://127.0.0.1:8000/posts', {
          title: inputs.title,
          content: inputs.content,
        })
        .then(() => window.location.reload());

      // 입력값 초기화
      setInputs({
        title: '',
        content: '',
      });
    } catch (error) {
      // 에러 발생 시 에러 처리
      console.error('Error creating new post:', error);
    }
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
      <BoardList />
    </>
  );
};

export default HomeInput;
