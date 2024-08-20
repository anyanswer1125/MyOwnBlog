import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post_title = '글 제목';

  let [logo, setLogo] = useState('HWAI Portfolio');
  let [Title, setTitle] = useState(['테스트 제목 1','테스트 제목 2','테스트 제목 3']);
  let [좋아요, 좋아요_수_변동] = useState(0);

  function 함수() {
    console.log('좋아요 버튼 클릭!')
    // 좋아요 += 1;
    좋아요_수_변동(좋아요 + 1)
    
  }

  return (
    <div className="App">
      <div className="nav">
        <h1> { logo } </h1>
        <button>Click Me!</button>
      </div>

      <div className='Banner'></div>

      <div className='lists-container'>

        <div className="list">
          <h4> {Title[0]} <span onClick={함수} className='button'> ❤️ </span> {좋아요} </h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4> {Title[1]} </h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4> {Title[2]} </h4>
          <p>2월 17일 발행</p>
        </div>

      </div>


    </div>
  );
}

export default App;
