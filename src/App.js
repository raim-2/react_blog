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
        // modal == true ? <Modal color={'pink'} 글제목={글제목}/> : null
         modal == true ? <Modal color='pink' 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
    </div>
  );
}

//컴포넌트 
function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목];
        copy[0] = '여자코트 추천';
        props.글제목변경(copy)
        }}>글수정버튼</button>
    </div> 
  )
}

export default App;
