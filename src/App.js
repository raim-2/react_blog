/*eslint-disable*/ //경고메세지가 뜨는 eslint 기능을 꺼준다.
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  

  return (
    <div className="App">
      <div className="black-nav"> 
        <h4>ReactBlog</h4>
      </div>
      
      <button className='arrange-btn' onClick={ () => {
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={
           () => {
            let good = [...좋아요];
            good[0] = good[0] + 1;
            좋아요변경(good)
            } }>👍</span> {좋아요[0]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}<span onClick={ () => {
          let good2 = [...좋아요];
          good2[1] = good2[1] + 1;
          좋아요변경(good2)} }>👍</span> {좋아요[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}<span onClick={ () => {
          let good3 = [...좋아요];
          good3[2] = good3[2] + 1;
          좋아요변경(good3)} }>👍</span> {좋아요[2]} </h4>
        <p  style={{display:'inline-block', marginRight: '10px'}}>2월 17일 발행</p>
        <button onClick={ ()=> {
        modal == false ? setModal(true) : setModal(false)
        }}>모달버튼</button>
      </div> */}

      {
        글제목.map(function(a,i){
          return (
            <div className="list" key={i}>
              <h4 onClick = { () => {setModal(!modal)}} > 
                {글제목[i]}
                  <span onClick={ () => {
                    let good = [...좋아요];
                    good[i] = good[i] + 1;
                   좋아요변경(good);
                  } }>👍</span> 
               {좋아요[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

//컴포넌트 
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  )
}

export default App;
