/*eslint-disable*/ //경고메세지가 뜨는 eslint 기능을 꺼준다.
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav"> 
        <h4>ReactBlog</h4>
      </div>

      <button onClick = { () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}> 수정버튼 </button>
      
      <button onClick={ () => {
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>가나다순정렬</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => {좋아요변경(좋아요+1)} }>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
